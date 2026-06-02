import * as THREE from "three";
import { DRACOLoader, GLTF, GLTFLoader } from "three-stdlib";
import { setCharTimeline, setAllTimeline } from "../../utils/GsapScroll";

const setCharacter = (
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera
) => {
  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/draco/");
  loader.setDRACOLoader(dracoLoader);

  const loadCharacter = () => {
    return new Promise<GLTF | null>(async (resolve) => {
      try {
        const response = await fetch("/models/character.glb");
        if (!response.ok) {
          console.warn(`character.glb is unavailable (${response.status}); skipping 3D model load.`);
          dracoLoader.dispose();
          resolve(null);
          return;
        }
        const preview = await response.clone().text();
        if (preview.startsWith("version https://git-lfs.github.com/spec/v1")) {
          console.warn("character.glb is a Git LFS pointer in this workspace; skipping 3D model load.");
          dracoLoader.dispose();
          resolve(null);
          return;
        }

        loader.load(
          "/models/character.glb",
          async (gltf) => {
            const character = gltf.scene;
            await renderer.compileAsync(character, camera, scene);
            character.traverse((child: any) => {
              if (child.isMesh) {
                const mesh = child as THREE.Mesh;
                child.castShadow = false;
                child.receiveShadow = false;
                mesh.frustumCulled = true;
                if (mesh.material && !Array.isArray(mesh.material)) {
                  (mesh.material as THREE.ShaderMaterial).precision = 'mediump';
                }
              }
            });
            resolve(gltf);
            setCharTimeline(character, camera);
            setAllTimeline();
            character!.getObjectByName("footR")!.position.y = 3.36;
            character!.getObjectByName("footL")!.position.y = 3.36;
            dracoLoader.dispose();
          },
          undefined,
          (error) => {
            console.error("Error loading GLTF model:", error);
            dracoLoader.dispose();
            resolve(null);
          }
        );
      } catch (err) {
        console.error(err);
        dracoLoader.dispose();
        resolve(null);
      }
    });
  };

  return { loadCharacter };
};

export default setCharacter;
