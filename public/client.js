import * as THREE from 'three'
import { DragControls } from './jsm/controls/DragControls.js'

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 2.5;
camera.position.x = 2;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry_gab = new THREE.BufferGeometry();
const vertices_gab = new Float32Array( [
	//retangulo     // offset
    2.5, 0.0,  0.0, // 0
    3.5, 0.0,  0.0,
    3.5, 0.5,  0.0,

    3.5, 0.5,  0.0, // 9
    2.5, 0.5,  0.0,
    2.5, 0.0,  0.0,

    //paralelogramo
    2.5 - Math.SQRT2/8, 0.5,  0.0,  // 18
    2.5 + Math.SQRT2/8, 0.5,  0.0,
    2.5 + 3*Math.SQRT2/8, 0.5 + Math.SQRT2/4, 0.0,

    2.5 + 3*Math.SQRT2/8, 0.5 + Math.SQRT2/4, 0.0, // 27
    2.5 + Math.SQRT2/8, 0.5 + Math.SQRT2/4, 0.0,
    2.5 - Math.SQRT2/8, 0.5,  0.0,

    //triangulo maior
    2.5 + Math.SQRT2/8, 0.5,  0.0,  // 36
    3.5 + Math.SQRT2/8, 0.5,  0.0,
    3.0 + Math.SQRT2/8, 1.0,  0.0,

    //quadrado
    2.5 + Math.SQRT2/8, 0.5 + Math.SQRT2/4, 0.0,  // 45
    2.5 + 3*Math.SQRT2/8, 0.5 + Math.SQRT2/4, 0.0,
    2.5 + 3*Math.SQRT2/8, 0.5 + Math.SQRT2/2, 0.0,

    2.5 + 3*Math.SQRT2/8, 0.5 + Math.SQRT2/2, 0.0,  // 54
    2.5 + Math.SQRT2/8, 0.5 + Math.SQRT2/2, 0.0,
    2.5 + Math.SQRT2/8, 0.5 + Math.SQRT2/4, 0.0,
] );
geometry_gab.setAttribute( 'position', new THREE.BufferAttribute( vertices_gab, 3 ) );
const material_gab = new THREE.MeshBasicMaterial( { color: 0x4d4d4d } );
const gabarito = new THREE.Mesh( geometry_gab, material_gab );
scene.add(gabarito);

var homogeneo = new THREE.Vector3(0,0,1);

const geometry1 = new THREE.BufferGeometry();
const vertices1 = new Float32Array( [
    0.0, 0.0,  0.0,
    0.5, 0.5,  0.0,
    0.0, 1.0,  0.0,
] );
geometry1.setAttribute( 'position', new THREE.BufferAttribute( vertices1, 3 ) );
const material1 = new THREE.MeshBasicMaterial( { color: 0xff0000, transparent: true, } );
const piece1 = new THREE.Mesh( geometry1, material1 );
scene.add(piece1);
var A1 = new THREE.Vector3().fromArray(vertices1,0).add(homogeneo);
var B1 = new THREE.Vector3().fromArray(vertices1,3).add(homogeneo);
var C1 = new THREE.Vector3().fromArray(vertices1,6).add(homogeneo);
var G1 = baricenter(A1, B1, C1);
var new_A1 = new THREE.Vector3().add(A1);
var new_B1 = new THREE.Vector3().add(B1);
var new_C1 = new THREE.Vector3().add(C1);

const geometry2 = new THREE.BufferGeometry();
const vertices2 = new Float32Array( [
	0.0, 1.0,  0.0,
	0.5, 0.5,  0.0,
	1.0, 1.0,  0.0,
] );
geometry2.setAttribute( 'position', new THREE.BufferAttribute( vertices2, 3 ) );
const material2 = new THREE.MeshBasicMaterial( { color: 0xaa0000, transparent: true, } );
const piece2 = new THREE.Mesh( geometry2, material2 );
scene.add(piece2);
var A2 = new THREE.Vector3().fromArray(vertices2,0).add(homogeneo);
var B2 = new THREE.Vector3().fromArray(vertices2,3).add(homogeneo);
var C2 = new THREE.Vector3().fromArray(vertices2,6).add(homogeneo);
var G2 = baricenter(A2, B2, C2);
var new_A2 = new THREE.Vector3().add(A2);
var new_B2 = new THREE.Vector3().add(B2);
var new_C2 = new THREE.Vector3().add(C2);

const geometry3 = new THREE.BufferGeometry();
const vertices3 = new Float32Array( [
	0.0, 0.0,  0.0,
	0.5, 0.0,  0.0,
	0.25, 0.25,  0.0,
] );
geometry3.setAttribute( 'position', new THREE.BufferAttribute( vertices3, 3 ) );
const material3 = new THREE.MeshBasicMaterial( { color: 0x800080, transparent: true, } );
const piece3 = new THREE.Mesh( geometry3, material3 );
scene.add(piece3);
var A3 = new THREE.Vector3().fromArray(vertices3,0).add(homogeneo);
var B3 = new THREE.Vector3().fromArray(vertices3,3).add(homogeneo);
var C3 = new THREE.Vector3().fromArray(vertices3,6).add(homogeneo);
var G3 = baricenter(A3, B3, C3);
var new_A3 = new THREE.Vector3().add(A3);
var new_B3 = new THREE.Vector3().add(B3);
var new_C3 = new THREE.Vector3().add(C3);

const geometry4 = new THREE.BufferGeometry();
const vertices4 = new Float32Array( [
	0.25, 0.25,  0.0,
	0.5, 0.0,  0.0,
	0.75, 0.25,  0.0,

    0.75, 0.25,  0.0,
	0.5, 0.5,  0.0,
    0.25, 0.25,  0.0,
] );
geometry4.setAttribute( 'position', new THREE.BufferAttribute( vertices4, 3 ) );
const material4 = new THREE.MeshBasicMaterial( { color: 0xffff00, transparent: true, } );
const piece4 = new THREE.Mesh( geometry4, material4 );
scene.add(piece4);
var A4 = new THREE.Vector3().fromArray(vertices4,0).add(homogeneo);
var B4 = new THREE.Vector3().fromArray(vertices4,3).add(homogeneo);
var C4 = new THREE.Vector3().fromArray(vertices4,6).add(homogeneo);
var D4 = new THREE.Vector3().fromArray(vertices4,12).add(homogeneo);
var G4 = quadcenter(A4, B4, C4, D4);
var new_A4 = new THREE.Vector3().add(A4);
var new_B4 = new THREE.Vector3().add(B4);
var new_C4 = new THREE.Vector3().add(C4);
var new_D4 = new THREE.Vector3().add(D4);

const geometry5 = new THREE.BufferGeometry();
const vertices5 = new Float32Array( [
	0.5, 0.5,  0.0,
    0.75, 0.25,  0.0,
    0.75, 0.75,  0.0,
] );
geometry5.setAttribute( 'position', new THREE.BufferAttribute( vertices5, 3 ) );
const material5 = new THREE.MeshBasicMaterial( { color: 0xff00ff, transparent: true, } );
const piece5 = new THREE.Mesh( geometry5, material5 );
scene.add(piece5);
var A5 = new THREE.Vector3().fromArray(vertices5,0).add(homogeneo);
var B5 = new THREE.Vector3().fromArray(vertices5,3).add(homogeneo);
var C5 = new THREE.Vector3().fromArray(vertices5,6).add(homogeneo);
var G5 = baricenter(A5, B5, C5);
var new_A5 = new THREE.Vector3().add(A5);
var new_B5 = new THREE.Vector3().add(B5);
var new_C5 = new THREE.Vector3().add(C5);

const geometry6 = new THREE.BufferGeometry();
const vertices6 = new Float32Array( [
	0.75, 0.75,  0.0,
	0.75, 0.25,  0.0,
	1.0, 0.5,  0.0,

    1.0, 0.5,  0.0,
	1.0, 1.0,  0.0,
    0.75, 0.75,  0.0,
] );
geometry6.setAttribute( 'position', new THREE.BufferAttribute( vertices6, 3 ) );
const material6 = new THREE.MeshBasicMaterial( { color: 0x008080, transparent: true, } );
const piece6 = new THREE.Mesh( geometry6, material6 );
scene.add(piece6);
var A6 = new THREE.Vector3().fromArray(vertices6,0).add(homogeneo);
var B6 = new THREE.Vector3().fromArray(vertices6,3).add(homogeneo);
var C6 = new THREE.Vector3().fromArray(vertices6,6).add(homogeneo);
var D6 = new THREE.Vector3().fromArray(vertices6,12).add(homogeneo);
var G6 = quadcenter(A6, B6, C6, D6);
var new_A6 = new THREE.Vector3().add(A6);
var new_B6 = new THREE.Vector3().add(B6);
var new_C6 = new THREE.Vector3().add(C6);
var new_D6 = new THREE.Vector3().add(D6);

const geometry7 = new THREE.BufferGeometry();
const vertices7 = new Float32Array( [
	0.5, 0.0,  0.0,
    1.0, 0.0,  0.0,
    1.0, 0.5,  0.0,
] );
geometry7.setAttribute( 'position', new THREE.BufferAttribute( vertices7, 3 ) );
const material7 = new THREE.MeshBasicMaterial( { color: 0x808000, transparent: true, } );
const piece7 = new THREE.Mesh( geometry7, material7 );
scene.add(piece7);
var A7 = new THREE.Vector3().fromArray(vertices7,0).add(homogeneo);
var B7 = new THREE.Vector3().fromArray(vertices7,3).add(homogeneo);
var C7 = new THREE.Vector3().fromArray(vertices7,6).add(homogeneo);
var G7 = baricenter(A7, B7, C7);
var new_A7 = new THREE.Vector3().add(A7);
var new_B7 = new THREE.Vector3().add(B7);
var new_C7 = new THREE.Vector3().add(C7);

var objects = [];
objects.push(piece1);
objects.push(piece2);
objects.push(piece3);
objects.push(piece4);
objects.push(piece5);
objects.push(piece6);
objects.push(piece7);

const controls = new DragControls( objects, camera, renderer.domElement );
const pointer = new THREE.Vector2();
const raycaster = new THREE.Raycaster();

window.addEventListener('mousemove', PointInPolygon);
window.addEventListener('mouseup', newCoordinates);

var selected_object = '';

function PointInPolygon(event) {
    pointer.x = (event.clientX / window.innerWidth)*2 - 1;
    pointer.y = -(event.clientY / window.innerHeight)*2 + 1;

    raycaster.setFromCamera(pointer, camera);
    let intersects = raycaster.intersectObjects(scene.children);

    for (var i=0; i<objects.length; i++) {
        objects[i].material.opacity = 1.0;
    }  

    if(intersects.length > 0 && intersects[intersects.length-1].object != gabarito) {
        selected_object = intersects[intersects.length-1];
        intersects[intersects.length-1].object.material.opacity = 0.9;
        window.addEventListener('wheel', RotationObject);
    } else {
        window.removeEventListener('wheel', RotationObject);      
    }
}

var rotations = [0,0,0,0,0,0,0,0];

function rotationMatrix(theta) {
    var m = new THREE.Matrix3();
    m.set(Math.cos(theta), -Math.sin(theta), 0,
            Math.sin(theta), Math.cos(theta), 0,
            0, 0, 1);
    return m;
}

function baricenter(a,b,c) {
    var G = new THREE.Vector3().addScaledVector(a,1/3).addScaledVector(b,1/3).addScaledVector(c,1/3);
    return G;
}

function quadcenter(a,b,c,d) {
    var G = new THREE.Vector3().addScaledVector(a,1/2).addScaledVector(c,1/2);
    return G;
}

function newVertice(X, G, position, rotation) {
    var new_X = new THREE.Vector3();
    var GX = new THREE.Vector3().add(X).addScaledVector(G,-1);
    new_X.addVectors(G, position).add(GX.applyMatrix3(rotationMatrix(rotation)));
    return new_X;
}

function RetaInterReta(r, s) {
    var inter = new THREE.Vector3().crossVectors(r,s);
    inter.divideScalar(inter.z);
    return inter;
}

function GetLados(polygon) {
    var lados = [];
    for (var i=0; i<polygon.length; i++) {
        lados.push(new THREE.Vector3().crossVectors(polygon[i%polygon.length],polygon[(i+1)%polygon.length]));
    }
    return lados;
}

function AreaPolygon(polygon) {
    var soma = 0;
    for (var i=0; i<polygon.length; i++) {
        soma += (polygon[i%polygon.length].x * polygon[(i+1)%polygon.length].y);
        soma -= (polygon[(i+1)%polygon.length].x * polygon[i%polygon.length].y);
    }
    return Math.abs(soma)/2;
}

function PointInRetangulo (lado, X) {
    var a = new THREE.Vector3().fromArray(vertices_gab, 0).add(homogeneo);
    var b = new THREE.Vector3().fromArray(vertices_gab, 3).add(homogeneo);
    var c = new THREE.Vector3().fromArray(vertices_gab, 6).add(homogeneo);
    var d = new THREE.Vector3().fromArray(vertices_gab, 12).add(homogeneo);
    var L = new THREE.Vector3().crossVectors(a,d);
    var R = new THREE.Vector3().crossVectors(b,c);
    var B = new THREE.Vector3().crossVectors(a,b);
    var T = new THREE.Vector3().crossVectors(c,d);
    switch (lado) {
        case "L":
            if (L.dot(X) < 0) { return "in"; }
            if (L.dot(X) > 0) { return "out";}
            if (L.dot(X) == 0){ return "on"; }
            break;
        case "R":
            if (R.dot(X) > 0) { return "in"; }
            if (R.dot(X) < 0) { return "out";}
            if (R.dot(X) == 0){ return "on"; }
            break;
        case "B":
            if (B.dot(X) > 0) { return "in"; }
            if (B.dot(X) < 0) { return "out";}
            if (B.dot(X) == 0){ return "on"; }
            break;
        case "T":
            if (T.dot(X) > 0) { return "in"; }
            if (T.dot(X) < 0) { return "out";}
            if (T.dot(X) == 0){ return "on"; }
            break;
    }
}

function PointInLosango (lado, X) {
    var a = new THREE.Vector3().fromArray(vertices_gab, 18).add(homogeneo);
    var b = new THREE.Vector3().fromArray(vertices_gab, 21).add(homogeneo);
    var c = new THREE.Vector3().fromArray(vertices_gab, 24).add(homogeneo);
    var d = new THREE.Vector3().fromArray(vertices_gab, 30).add(homogeneo);
    var L = new THREE.Vector3().crossVectors(a,d);
    var R = new THREE.Vector3().crossVectors(b,c);
    var B = new THREE.Vector3().crossVectors(a,b);
    var T = new THREE.Vector3().crossVectors(c,d);
    switch (lado) {
        case "L":
            if (L.dot(X) < 0) { return "in"; }
            if (L.dot(X) > 0) { return "out";}
            if (L.dot(X) == 0){ return "on"; }
            break;
        case "R":
            if (R.dot(X) > 0) { return "in"; }
            if (R.dot(X) < 0) { return "out";}
            if (R.dot(X) == 0){ return "on"; }
            break;
        case "B":
            if (B.dot(X) > 0) { return "in"; }
            if (B.dot(X) < 0) { return "out";}
            if (B.dot(X) == 0){ return "on"; }
            break;
        case "T":
            if (T.dot(X) > 0) { return "in"; }
            if (T.dot(X) < 0) { return "out";}
            if (T.dot(X) == 0){ return "on"; }
            break;
    }
}

function PointInTriangulo (lado, X) {
    var a = new THREE.Vector3().fromArray(vertices_gab, 36).add(homogeneo);
    var b = new THREE.Vector3().fromArray(vertices_gab, 39).add(homogeneo);
    var c = new THREE.Vector3().fromArray(vertices_gab, 42).add(homogeneo);
    var L = new THREE.Vector3().crossVectors(a,c);
    var R = new THREE.Vector3().crossVectors(b,c);
    var B = new THREE.Vector3().crossVectors(a,b);
    switch (lado) {
        case "L":
            if (L.dot(X) < 0) { return "in"; }
            if (L.dot(X) > 0) { return "out";}
            if (L.dot(X) == 0){ return "on"; }
            break;
        case "R":
            if (R.dot(X) > 0) { return "in"; }
            if (R.dot(X) < 0) { return "out";}
            if (R.dot(X) == 0){ return "on"; }
            break;
        case "B":
            if (B.dot(X) > 0) { return "in"; }
            if (B.dot(X) < 0) { return "out";}
            if (B.dot(X) == 0){ return "on"; }
            break;
    }
}

function PointInQuadrado (lado, X) {
    var a = new THREE.Vector3().fromArray(vertices_gab, 45).add(homogeneo);
    var b = new THREE.Vector3().fromArray(vertices_gab, 48).add(homogeneo);
    var c = new THREE.Vector3().fromArray(vertices_gab, 51).add(homogeneo);
    var d = new THREE.Vector3().fromArray(vertices_gab, 57).add(homogeneo);
    var L = new THREE.Vector3().crossVectors(a,d);
    var R = new THREE.Vector3().crossVectors(b,c);
    var B = new THREE.Vector3().crossVectors(a,b);
    var T = new THREE.Vector3().crossVectors(c,d);
    switch (lado) {
        case "L":
            if (L.dot(X) < 0) { return "in"; }
            if (L.dot(X) > 0) { return "out";}
            if (L.dot(X) == 0){ return "on"; }
            break;
        case "R":
            if (R.dot(X) > 0) { return "in"; }
            if (R.dot(X) < 0) { return "out";}
            if (R.dot(X) == 0){ return "on"; }
            break;
        case "B":
            if (B.dot(X) > 0) { return "in"; }
            if (B.dot(X) < 0) { return "out";}
            if (B.dot(X) == 0){ return "on"; }
            break;
        case "T":
            if (T.dot(X) > 0) { return "in"; }
            if (T.dot(X) < 0) { return "out";}
            if (T.dot(X) == 0){ return "on"; }
            break;
    }
}

function ClippedPolygonRetangulo (polygon) {
    // retas que definem o retangulo
    var a = new THREE.Vector3().fromArray(vertices_gab, 0).add(homogeneo);
    var b = new THREE.Vector3().fromArray(vertices_gab, 3).add(homogeneo);
    var c = new THREE.Vector3().fromArray(vertices_gab, 6).add(homogeneo);
    var d = new THREE.Vector3().fromArray(vertices_gab, 12).add(homogeneo);
    var L = new THREE.Vector3().crossVectors(a,d);
    var R = new THREE.Vector3().crossVectors(b,c);
    var B = new THREE.Vector3().crossVectors(a,b);
    var T = new THREE.Vector3().crossVectors(c,d);

    var lados = [];
    var aux = [];
    var vertices = [];

    lados = GetLados(polygon);
    aux = polygon;
    for (var i=0; i<aux.length; i++) {
        if (PointInRetangulo("B", aux[i%aux.length])  == "out" && 
            PointInRetangulo("B", aux[(i+1)%aux.length]) == "in") {
            vertices.push(RetaInterReta(B, lados[i]));
            vertices.push(aux[(i+1)%aux.length]);
        }
        if (PointInRetangulo("B", aux[i%aux.length])  == "in" && 
            PointInRetangulo("B", aux[(i+1)%aux.length]) == "out") {
            vertices.push(RetaInterReta(B, lados[i]));
        }
        if (PointInRetangulo("B", aux[i%aux.length])  == "in" && 
            PointInRetangulo("B", aux[(i+1)%aux.length]) == "in") {
            vertices.push(aux[(i+1)%aux.length]);
        }
        if (PointInRetangulo("B", aux[i%aux.length])  == "out" && 
            PointInRetangulo("B", aux[(i+1)%aux.length]) == "out") {
            
        }
    }
    lados =  GetLados(vertices);
    aux = vertices;
    vertices = [];
    for (var i=0; i<aux.length; i++) {
        if (PointInRetangulo("T", aux[i%aux.length])  == "out" && 
            PointInRetangulo("T", aux[(i+1)%aux.length]) == "in") {
            vertices.push(RetaInterReta(T, lados[i]));
            vertices.push(aux[(i+1)%aux.length]);
        }
        if (PointInRetangulo("T", aux[i%aux.length])  == "in" && 
            PointInRetangulo("T", aux[(i+1)%aux.length]) == "out") {
            vertices.push(RetaInterReta(T, lados[i]));
        }
        if (PointInRetangulo("T", aux[i%aux.length])  == "in" && 
            PointInRetangulo("T", aux[(i+1)%aux.length]) == "in") {
            vertices.push(aux[(i+1)%aux.length]);
        }
        if (PointInRetangulo("T", aux[i%aux.length])  == "out" && 
            PointInRetangulo("T", aux[(i+1)%aux.length]) == "out") {
            
        }
    }
    lados =  GetLados(vertices);
    aux = vertices;
    vertices = [];
    for (var i=0; i<aux.length; i++) {
        if (PointInRetangulo("L", aux[i%aux.length])  == "out" && 
            PointInRetangulo("L", aux[(i+1)%aux.length]) == "in") {
            vertices.push(RetaInterReta(L, lados[i]));
            vertices.push(aux[(i+1)%aux.length]);
        }
        if (PointInRetangulo("L", aux[i%aux.length])  == "in" && 
            PointInRetangulo("L", aux[(i+1)%aux.length]) == "out") {
            vertices.push(RetaInterReta(L, lados[i]));
        }
        if (PointInRetangulo("L", aux[i%aux.length])  == "in" && 
            PointInRetangulo("L", aux[(i+1)%aux.length]) == "in") {
            vertices.push(aux[(i+1)%aux.length]);
        }
        if (PointInRetangulo("L", aux[i%aux.length])  == "out" && 
            PointInRetangulo("L", aux[(i+1)%aux.length]) == "out") {
            
        }
    }
    lados =  GetLados(vertices);
    aux = vertices;
    vertices = [];
    for (var i=0; i<aux.length; i++) {
        if (PointInRetangulo("R", aux[i%aux.length])  == "out" && 
            PointInRetangulo("R", aux[(i+1)%aux.length]) == "in") {
            vertices.push(RetaInterReta(R, lados[i]));
            vertices.push(aux[(i+1)%aux.length]);
        }
        if (PointInRetangulo("R", aux[i%aux.length])  == "in" && 
            PointInRetangulo("R", aux[(i+1)%aux.length]) == "out") {
            vertices.push(RetaInterReta(R, lados[i]));
        }
        if (PointInRetangulo("R", aux[i%aux.length])  == "in" && 
            PointInRetangulo("R", aux[(i+1)%aux.length]) == "in") {
            vertices.push(aux[(i+1)%aux.length]);
        }
        if (PointInRetangulo("R", aux[i%aux.length])  == "out" && 
            PointInRetangulo("R", aux[(i+1)%aux.length]) == "out") {
            
        }
    }

    return vertices;
}

function ClippedPolygonLosango (polygon) {
    // retas que definem o losango
    var a = new THREE.Vector3().fromArray(vertices_gab, 18).add(homogeneo);
    var b = new THREE.Vector3().fromArray(vertices_gab, 21).add(homogeneo);
    var c = new THREE.Vector3().fromArray(vertices_gab, 24).add(homogeneo);
    var d = new THREE.Vector3().fromArray(vertices_gab, 30).add(homogeneo);
    var L = new THREE.Vector3().crossVectors(a,d);
    var R = new THREE.Vector3().crossVectors(b,c);
    var B = new THREE.Vector3().crossVectors(a,b);
    var T = new THREE.Vector3().crossVectors(c,d);

    var lados = [];
    var aux = [];
    var vertices = [];

    lados = GetLados(polygon);
    aux = polygon;
    for (var i=0; i<aux.length; i++) {
        if (PointInLosango("B", aux[i%aux.length])  == "out" && 
            PointInLosango("B", aux[(i+1)%aux.length]) == "in") {
            vertices.push(RetaInterReta(B, lados[i]));
            vertices.push(aux[(i+1)%aux.length]);
        }
        if (PointInLosango("B", aux[i%aux.length])  == "in" && 
            PointInLosango("B", aux[(i+1)%aux.length]) == "out") {
            vertices.push(RetaInterReta(B, lados[i]));
        }
        if (PointInLosango("B", aux[i%aux.length])  == "in" && 
            PointInLosango("B", aux[(i+1)%aux.length]) == "in") {
            vertices.push(aux[(i+1)%aux.length]);
        }
        if (PointInLosango("B", aux[i%aux.length])  == "out" && 
            PointInLosango("B", aux[(i+1)%aux.length]) == "out") {
            
        }
    }
    lados =  GetLados(vertices);
    aux = vertices;
    vertices = [];
    for (var i=0; i<aux.length; i++) {
        if (PointInLosango("T", aux[i%aux.length])  == "out" && 
            PointInLosango("T", aux[(i+1)%aux.length]) == "in") {
            vertices.push(RetaInterReta(T, lados[i]));
            vertices.push(aux[(i+1)%aux.length]);
        }
        if (PointInLosango("T", aux[i%aux.length])  == "in" && 
            PointInLosango("T", aux[(i+1)%aux.length]) == "out") {
            vertices.push(RetaInterReta(T, lados[i]));
        }
        if (PointInLosango("T", aux[i%aux.length])  == "in" && 
            PointInLosango("T", aux[(i+1)%aux.length]) == "in") {
            vertices.push(aux[(i+1)%aux.length]);
        }
        if (PointInLosango("T", aux[i%aux.length])  == "out" && 
            PointInLosango("T", aux[(i+1)%aux.length]) == "out") {
            
        }
    }
    lados =  GetLados(vertices);
    aux = vertices;
    vertices = [];
    for (var i=0; i<aux.length; i++) {
        if (PointInLosango("L", aux[i%aux.length])  == "out" && 
            PointInLosango("L", aux[(i+1)%aux.length]) == "in") {
            vertices.push(RetaInterReta(L, lados[i]));
            vertices.push(aux[(i+1)%aux.length]);
        }
        if (PointInLosango("L", aux[i%aux.length])  == "in" && 
            PointInLosango("L", aux[(i+1)%aux.length]) == "out") {
            vertices.push(RetaInterReta(L, lados[i]));
        }
        if (PointInLosango("L", aux[i%aux.length])  == "in" && 
            PointInLosango("L", aux[(i+1)%aux.length]) == "in") {
            vertices.push(aux[(i+1)%aux.length]);
        }
        if (PointInLosango("L", aux[i%aux.length])  == "out" && 
            PointInLosango("L", aux[(i+1)%aux.length]) == "out") {
            
        }
    }
    lados =  GetLados(vertices);
    aux = vertices;
    vertices = [];
    for (var i=0; i<aux.length; i++) {
        if (PointInLosango("R", aux[i%aux.length])  == "out" && 
            PointInLosango("R", aux[(i+1)%aux.length]) == "in") {
            vertices.push(RetaInterReta(R, lados[i]));
            vertices.push(aux[(i+1)%aux.length]);
        }
        if (PointInLosango("R", aux[i%aux.length])  == "in" && 
            PointInLosango("R", aux[(i+1)%aux.length]) == "out") {
            vertices.push(RetaInterReta(R, lados[i]));
        }
        if (PointInLosango("R", aux[i%aux.length])  == "in" && 
            PointInLosango("R", aux[(i+1)%aux.length]) == "in") {
            vertices.push(aux[(i+1)%aux.length]);
        }
        if (PointInLosango("R", aux[i%aux.length])  == "out" && 
            PointInLosango("R", aux[(i+1)%aux.length]) == "out") {
            
        }
    }

    return vertices;
}

function ClippedPolygonTriangulo (polygon) {
    // retas que definem o triangulo
    var a = new THREE.Vector3().fromArray(vertices_gab, 36).add(homogeneo);
    var b = new THREE.Vector3().fromArray(vertices_gab, 39).add(homogeneo);
    var c = new THREE.Vector3().fromArray(vertices_gab, 42).add(homogeneo);
    var L = new THREE.Vector3().crossVectors(a,c);
    var R = new THREE.Vector3().crossVectors(b,c);
    var B = new THREE.Vector3().crossVectors(a,b);
    
    var lados = [];
    var aux = [];
    var vertices = [];

    lados = GetLados(polygon);
    aux = polygon;
    for (var i=0; i<aux.length; i++) {
        if (PointInTriangulo("B", aux[i%aux.length])  == "out" && 
            PointInTriangulo("B", aux[(i+1)%aux.length]) == "in") {
            vertices.push(RetaInterReta(B, lados[i]));
            vertices.push(aux[(i+1)%aux.length]);
        }
        if (PointInTriangulo("B", aux[i%aux.length])  == "in" && 
            PointInTriangulo("B", aux[(i+1)%aux.length]) == "out") {
            vertices.push(RetaInterReta(B, lados[i]));
        }
        if (PointInTriangulo("B", aux[i%aux.length])  == "in" && 
            PointInTriangulo("B", aux[(i+1)%aux.length]) == "in") {
            vertices.push(aux[(i+1)%aux.length]);
        }
        if (PointInTriangulo("B", aux[i%aux.length])  == "out" && 
            PointInTriangulo("B", aux[(i+1)%aux.length]) == "out") {
            
        }
    }
    lados =  GetLados(vertices);
    aux = vertices;
    vertices = [];
    for (var i=0; i<aux.length; i++) {
        if (PointInTriangulo("L", aux[i%aux.length])  == "out" && 
            PointInTriangulo("L", aux[(i+1)%aux.length]) == "in") {
            vertices.push(RetaInterReta(L, lados[i]));
            vertices.push(aux[(i+1)%aux.length]);
        }
        if (PointInTriangulo("L", aux[i%aux.length])  == "in" && 
            PointInTriangulo("L", aux[(i+1)%aux.length]) == "out") {
            vertices.push(RetaInterReta(L, lados[i]));
        }
        if (PointInTriangulo("L", aux[i%aux.length])  == "in" && 
            PointInTriangulo("L", aux[(i+1)%aux.length]) == "in") {
            vertices.push(aux[(i+1)%aux.length]);
        }
        if (PointInTriangulo("L", aux[i%aux.length])  == "out" && 
            PointInTriangulo("L", aux[(i+1)%aux.length]) == "out") {
            
        }
    }
    lados =  GetLados(vertices);
    aux = vertices;
    vertices = [];
    for (var i=0; i<aux.length; i++) {
        if (PointInTriangulo("R", aux[i%aux.length])  == "out" && 
            PointInTriangulo("R", aux[(i+1)%aux.length]) == "in") {
            vertices.push(RetaInterReta(R, lados[i]));
            vertices.push(aux[(i+1)%aux.length]);
        }
        if (PointInTriangulo("R", aux[i%aux.length])  == "in" && 
            PointInTriangulo("R", aux[(i+1)%aux.length]) == "out") {
            vertices.push(RetaInterReta(R, lados[i]));
        }
        if (PointInTriangulo("R", aux[i%aux.length])  == "in" && 
            PointInTriangulo("R", aux[(i+1)%aux.length]) == "in") {
            vertices.push(aux[(i+1)%aux.length]);
        }
        if (PointInTriangulo("R", aux[i%aux.length])  == "out" && 
            PointInTriangulo("R", aux[(i+1)%aux.length]) == "out") {
            
        }
    }

    return vertices;
}

function ClippedPolygonQuadrado (polygon) {
    // retas que definem o quadrado 
    var a = new THREE.Vector3().fromArray(vertices_gab, 45).add(homogeneo);
    var b = new THREE.Vector3().fromArray(vertices_gab, 48).add(homogeneo);
    var c = new THREE.Vector3().fromArray(vertices_gab, 51).add(homogeneo);
    var d = new THREE.Vector3().fromArray(vertices_gab, 57).add(homogeneo);
    var L = new THREE.Vector3().crossVectors(a,d);
    var R = new THREE.Vector3().crossVectors(b,c);
    var B = new THREE.Vector3().crossVectors(a,b);
    var T = new THREE.Vector3().crossVectors(c,d);

    var lados = [];
    var aux = [];
    var vertices = [];

    lados = GetLados(polygon);
    aux = polygon;
    for (var i=0; i<aux.length; i++) {
        if (PointInQuadrado("B", aux[i%aux.length])  == "out" && 
        PointInQuadrado("B", aux[(i+1)%aux.length]) == "in") {
            vertices.push(RetaInterReta(B, lados[i]));
            vertices.push(aux[(i+1)%aux.length]);
        }
        if (PointInQuadrado("B", aux[i%aux.length])  == "in" && 
        PointInQuadrado("B", aux[(i+1)%aux.length]) == "out") {
            vertices.push(RetaInterReta(B, lados[i]));
        }
        if (PointInQuadrado("B", aux[i%aux.length])  == "in" && 
        PointInQuadrado("B", aux[(i+1)%aux.length]) == "in") {
            vertices.push(aux[(i+1)%aux.length]);
        }
        if (PointInQuadrado("B", aux[i%aux.length])  == "out" && 
        PointInQuadrado("B", aux[(i+1)%aux.length]) == "out") {
            
        }
    }
    lados =  GetLados(vertices);
    aux = vertices;
    vertices = [];
    for (var i=0; i<aux.length; i++) {
        if (PointInQuadrado("T", aux[i%aux.length])  == "out" && 
        PointInQuadrado("T", aux[(i+1)%aux.length]) == "in") {
            vertices.push(RetaInterReta(T, lados[i]));
            vertices.push(aux[(i+1)%aux.length]);
        }
        if (PointInQuadrado("T", aux[i%aux.length])  == "in" && 
        PointInQuadrado("T", aux[(i+1)%aux.length]) == "out") {
            vertices.push(RetaInterReta(T, lados[i]));
        }
        if (PointInQuadrado("T", aux[i%aux.length])  == "in" && 
        PointInQuadrado("T", aux[(i+1)%aux.length]) == "in") {
            vertices.push(aux[(i+1)%aux.length]);
        }
        if (PointInQuadrado("T", aux[i%aux.length])  == "out" && 
        PointInQuadrado("T", aux[(i+1)%aux.length]) == "out") {
            
        }
    }
    lados =  GetLados(vertices);
    aux = vertices;
    vertices = [];
    for (var i=0; i<aux.length; i++) {
        if (PointInQuadrado("L", aux[i%aux.length])  == "out" && 
            PointInQuadrado("L", aux[(i+1)%aux.length]) == "in") {
            vertices.push(RetaInterReta(L, lados[i]));
            vertices.push(aux[(i+1)%aux.length]);
        }
        if (PointInQuadrado("L", aux[i%aux.length])  == "in" && 
            PointInQuadrado("L", aux[(i+1)%aux.length]) == "out") {
            vertices.push(RetaInterReta(L, lados[i]));
        }
        if (PointInQuadrado("L", aux[i%aux.length])  == "in" && 
            PointInQuadrado("L", aux[(i+1)%aux.length]) == "in") {
            vertices.push(aux[(i+1)%aux.length]);
        }
        if (PointInQuadrado("L", aux[i%aux.length])  == "out" && 
            PointInQuadrado("L", aux[(i+1)%aux.length]) == "out") {
            
        }
    }
    lados =  GetLados(vertices);
    aux = vertices;
    vertices = [];
    for (var i=0; i<aux.length; i++) {
        if (PointInQuadrado("R", aux[i%aux.length])  == "out" && 
            PointInQuadrado("R", aux[(i+1)%aux.length]) == "in") {
            vertices.push(RetaInterReta(R, lados[i]));
            vertices.push(aux[(i+1)%aux.length]);
        }
        if (PointInQuadrado("R", aux[i%aux.length])  == "in" && 
            PointInQuadrado("R", aux[(i+1)%aux.length]) == "out") {
            vertices.push(RetaInterReta(R, lados[i]));
        }
        if (PointInQuadrado("R", aux[i%aux.length])  == "in" && 
            PointInQuadrado("R", aux[(i+1)%aux.length]) == "in") {
            vertices.push(aux[(i+1)%aux.length]);
        }
        if (PointInQuadrado("R", aux[i%aux.length])  == "out" && 
            PointInQuadrado("R", aux[(i+1)%aux.length]) == "out") {
            
        }
    }

    return vertices;
}

function GabaritoArea () {
    var retangulo = [];
    retangulo.push(new THREE.Vector3().fromArray(vertices_gab, 0).add(homogeneo));
    retangulo.push(new THREE.Vector3().fromArray(vertices_gab, 3).add(homogeneo));
    retangulo.push(new THREE.Vector3().fromArray(vertices_gab, 6).add(homogeneo));
    retangulo.push(new THREE.Vector3().fromArray(vertices_gab, 12).add(homogeneo));
    var losango = [];
    losango.push(new THREE.Vector3().fromArray(vertices_gab, 18).add(homogeneo));
    losango.push(new THREE.Vector3().fromArray(vertices_gab, 21).add(homogeneo));
    losango.push(new THREE.Vector3().fromArray(vertices_gab, 24).add(homogeneo));
    losango.push(new THREE.Vector3().fromArray(vertices_gab, 30).add(homogeneo));
    var triangulo = [];
    triangulo.push(new THREE.Vector3().fromArray(vertices_gab, 36).add(homogeneo));
    triangulo.push(new THREE.Vector3().fromArray(vertices_gab, 39).add(homogeneo));
    triangulo.push(new THREE.Vector3().fromArray(vertices_gab, 42).add(homogeneo));
    var quadrado = [];
    quadrado.push(new THREE.Vector3().fromArray(vertices_gab, 45).add(homogeneo));
    quadrado.push(new THREE.Vector3().fromArray(vertices_gab, 48).add(homogeneo));
    quadrado.push(new THREE.Vector3().fromArray(vertices_gab, 51).add(homogeneo));
    quadrado.push(new THREE.Vector3().fromArray(vertices_gab, 57).add(homogeneo));
    var area_total = AreaPolygon(retangulo) + AreaPolygon(losango) + AreaPolygon(triangulo) + AreaPolygon(quadrado);
    return area_total;
}

function PolygonIntersectionArea (polygons) {
    var soma = 0;
    for (var i=0; i<polygons.length; i++) {
        soma += AreaPolygon(ClippedPolygonRetangulo(polygons[i])) + AreaPolygon(ClippedPolygonLosango(polygons[i]))
                 + AreaPolygon(ClippedPolygonTriangulo(polygons[i])) + AreaPolygon(ClippedPolygonQuadrado(polygons[i]));
    }
    return soma;

}

function newCoordinates(event) {
    var polygon1 = [new_A1, new_B1, new_C1];
    var polygon2 = [new_A2, new_B2, new_C2];
    var polygon3 = [new_A3, new_B3, new_C3];
    var polygon4 = [new_A4, new_B4, new_C4, new_D4];
    var polygon5 = [new_A5, new_B5, new_C5];
    var polygon6 = [new_A6, new_B6, new_C6, new_D6];
    var polygon7 = [new_A7, new_B7, new_C7];
    switch (selected_object.object) {
        case piece1:
            new_A1 = newVertice(A1, G1, selected_object.object.position, rotations[1]);
            new_B1 = newVertice(B1, G1, selected_object.object.position, rotations[1]);
            new_C1 = newVertice(C1, G1, selected_object.object.position, rotations[1]);
            polygon1 =[new_A1, new_B1, new_C1];
            break;
        case piece2:
            new_A2 = newVertice(A2, G2, selected_object.object.position, rotations[2]);
            new_B2 = newVertice(B2, G2, selected_object.object.position, rotations[2]);
            new_C2 = newVertice(C2, G2, selected_object.object.position, rotations[2]);
            polygon2 = [new_A2, new_B2, new_C2];
            break;
        case piece3:
            new_A3 = newVertice(A3, G3, selected_object.object.position, rotations[3]);
            new_B3 = newVertice(B3, G3, selected_object.object.position, rotations[3]);
            new_C3 = newVertice(C3, G3, selected_object.object.position, rotations[3]);
            polygon3 = [new_A3, new_B3, new_C3];
            break;
        case piece4:
            new_A4 = newVertice(A4, G4, selected_object.object.position, rotations[4]);
            new_B4 = newVertice(B4, G4, selected_object.object.position, rotations[4]);
            new_C4 = newVertice(C4, G4, selected_object.object.position, rotations[4]);
            new_D4 = newVertice(D4, D4, selected_object.object.position, rotations[4]);
            polygon4 =[new_A4, new_B4, new_C4, new_D4];
            break;
        case piece5:
            new_A5 = newVertice(A5, G5, selected_object.object.position, rotations[5]);
            new_B5 = newVertice(B5, G5, selected_object.object.position, rotations[5]);
            new_C5 = newVertice(C5, G5, selected_object.object.position, rotations[5]);
            polygon5 = [new_A5, new_B5, new_C5];
            break;
        case piece6:
            new_A6 = newVertice(A6, G6, selected_object.object.position, rotations[6]);
            new_B6 = newVertice(B6, G6, selected_object.object.position, rotations[6]);
            new_C6 = newVertice(C6, G6, selected_object.object.position, rotations[6]);
            new_D6 = newVertice(D6, D6, selected_object.object.position, rotations[6]);
            polygon6 =[new_A6, new_B6, new_C6, new_D6];
            break;
        case piece7:
            new_A7 = newVertice(A7, G7, selected_object.object.position, rotations[7]);
            new_B7 = newVertice(B7, G7, selected_object.object.position, rotations[7]);
            new_C7 = newVertice(C7, G7, selected_object.object.position, rotations[7]);
            polygon7 = [new_A7, new_B7, new_C7];
            break;
    }
    var polygons = [polygon1,polygon2,polygon3,polygon4,polygon5,polygon6,polygon7];

    if (PolygonIntersectionArea(polygons) > 0.9*GabaritoArea()) {
        var element = document.getElementById('final');
        element.innerHTML = '<b>Você completou o Tangram! Parabéns!</b>'
    }
}

function RotationObject(event) {
    switch (selected_object.object) {
        case piece1:
            selected_object.object.geometry.translate(-0.5/3, -1.5/3, 0);
            selected_object.object.geometry.rotateZ(Math.sign(event.deltaY)*Math.PI/16);
            rotations[1] += Math.sign(event.deltaY)*Math.PI/16;
            selected_object.object.geometry.translate(0.5/3, 1.5/3, 0);
            break;
        case piece2:
            selected_object.object.geometry.translate(-1.5/3, -2.5/3, 0);
            selected_object.object.geometry.rotateZ(Math.sign(event.deltaY)*Math.PI/16);
            rotations[2] += Math.sign(event.deltaY)*Math.PI/16;
            selected_object.object.geometry.translate(1.5/3, 2.5/3, 0);
            break;
        case piece3:
            selected_object.object.geometry.translate(-0.25, -0.25/3, 0);
            selected_object.object.geometry.rotateZ(Math.sign(event.deltaY)*Math.PI/16);
            rotations[3] += Math.sign(event.deltaY)*Math.PI/16;
            selected_object.object.geometry.translate(0.25, 0.25/3, 0);
            break;
        case piece4:
            selected_object.object.geometry.translate(-0.5, -0.25, 0);
            selected_object.object.geometry.rotateZ(Math.sign(event.deltaY)*Math.PI/16);
            rotations[4] += Math.sign(event.deltaY)*Math.PI/16;
            selected_object.object.geometry.translate(0.5, 0.25, 0);
            break;
        case piece5:
            selected_object.object.geometry.translate(-2.0/3, -0.5, 0);
            selected_object.object.geometry.rotateZ(Math.sign(event.deltaY)*Math.PI/16);
            rotations[5] += Math.sign(event.deltaY)*Math.PI/16;
            selected_object.object.geometry.translate(2.0/3, 0.5, 0);
            break;
        case piece6:
            selected_object.object.geometry.translate(-1.75/2, -1.25/2, 0);
            selected_object.object.geometry.rotateZ(Math.sign(event.deltaY)*Math.PI/16);
            rotations[6] += Math.sign(event.deltaY)*Math.PI/16;
            selected_object.object.geometry.translate(1.75/2, 1.25/2, 0);
            break;
        case piece7:
            selected_object.object.geometry.translate(-2.5/3, -0.5/3, 0);
            selected_object.object.geometry.rotateZ(Math.sign(event.deltaY)*Math.PI/16);
            rotations[7] += Math.sign(event.deltaY)*Math.PI/16;
            selected_object.object.geometry.translate(2.5/3, 0.5/3, 0);
            break;
    }
}

function animate() { 
    requestAnimationFrame( animate );
    renderer.render( scene, camera ); 
}

animate();