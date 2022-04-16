import * as THREE from "three";
import { Texture } from "three";
import { TShapePoints } from "../../Points/Shapes/Tshape";
import { texture } from "../../Textures/Texture1";
import { texture2 } from "../../Textures/Texture2";
import { texture3 } from "../../Textures/Texture-1";
export class WindowShapeTop5{
    constructor() { }
    static createwindow() {

        //#region T Shape
        const points = TShapePoints;
        const shape = new THREE.Shape();
        shape.moveTo(0 ,0);
        shape.lineTo(0,0.5);
        shape.lineTo(0.5,0.5);
        shape.lineTo(0.5, 0);
        shape.lineTo(0, 0)
        shape.lineTo(0,0.1);
        shape.lineTo(0.4, 0.1);
        shape.lineTo(0.4, 0.4);
        shape.lineTo(0.1, 0.4);
        shape.lineTo(0.1, 0.1)
        //#endregion
    
        var point1 = new THREE.Vector3(0, 0, 0);
        var point2 = new THREE.Vector3(0, 0, 4);
        var path1 = new THREE.LineCurve3(point1, point2)
        var extrudeSettings1 = {
            bevelEnabled: true,
            steps: 20,
            extrudePath: path1
        };

        const material = texture.loader()
        const geometry1 = new THREE.ExtrudeBufferGeometry(shape, extrudeSettings1);
        const mesh1 = new THREE.Mesh(geometry1, material);
        mesh1.position.set(1, 14, -0.2)
        mesh1.rotation.x = Math.PI /2
        return mesh1;

    }
}

