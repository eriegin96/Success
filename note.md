# fiber
object3D
audioListener
positionalAudio
mesh
instancedMesh
scene
sprite
lOD
skinnedMesh
skeleton
bone
lineSegments
lineLoop
points
group

## camera
camera
perspectiveCamera
orthographicCamera
cubeCamera
arrayCamera

## geometry
instancedBufferGeometry
bufferGeometry
boxBufferGeometry
circleBufferGeometry
coneBufferGeometry
cylinderBufferGeometry
dodecahedronBufferGeometry
extrudeBufferGeometry
icosahedronBufferGeometry
latheBufferGeometry
octahedronBufferGeometry
planeBufferGeometry
polyhedronBufferGeometry
ringBufferGeometry
shapeBufferGeometry
sphereBufferGeometry
tetrahedronBufferGeometry
torusBufferGeometry
torusKnotBufferGeometry
tubeBufferGeometry
wireframeGeometry
tetrahedronGeometry
octahedronGeometry
icosahedronGeometry
dodecahedronGeometry
polyhedronGeometry
tubeGeometry
torusKnotGeometry
torusGeometry
sphereGeometry
ringGeometry
planeGeometry
latheGeometry
shapeGeometry
extrudeGeometry
edgesGeometry
coneGeometry
cylinderGeometry
circleGeometry
boxGeometry

## material
**MeshBasicMaterial < MeshLambertMaterial < MeshPhongMaterial < MeshStandardMaterial < MeshPhysicalMaterial**
material
shadowMaterial
spriteMaterial
rawShaderMaterial
shaderMaterial
pointsMaterial
*meshBasicMaterial*: Đây là Material cơ bản để tạo cho đối tượng một màu sắc đơn giản hoặc hiển thị wireframe. Material này không bị ảnh hưởng bởi ánh sáng.
*meshNormalMaterial*: Material đơn giản quyết định màu sắc của một mặt dựa vào normal vector (vector pháp tuyến) của nó. Không bị ảnh hưởng bởi ánh sáng.
*meshLambertMaterial*: Material này có sử dụng ánh sáng và tạo ra đối tượng trông mờ, không sáng bóng. Chỉ tính toán ánh sáng ở các đỉnh.
*meshDepthMaterial*: Sử dụng khoảng cách từ Camera đến đối tượng để quyết định màu sắc. Càng gần thì màu trắng, càng xa thì màu đen. Sự thay đổi giữa màu trắng và màu đen dựa vào các giá trị khoảng cách near và far của Camera.
*meshPhongMaterial*: Material này cũng sử dụng ánh sáng và có thể tạo các đối tượng sáng bóng. Tính toán ánh sáng ở tất cả pixel. Hỗ trợ specular highlight.
*meshToonMaterial*: Một mở rộng của MeshPhongMaterial để làm các đối tượng trông giống như cartoon (hoạt hình).
*meshStandardMaterial*: Material này sử dụng physically based rendering. Một model vật lý được sử dụng để quyết định cách ánh sáng tương tác với các bề mặt. Điều này cho phép bạn tạo các đối tượng chính xác và chân thật hơn.
*meshPhysicalMaterial*: Một mở rộng của MeshStandardMaterial cho phép nhiều điểu chỉnh hơn về reflection.
meshDistanceMaterial
meshMatcapMaterial
lineDashedMaterial
lineBasicMaterial

## Light
primitive
light
spotLightShadow
spotLight
pointLight
rectAreaLight
hemisphereLight
directionalLightShadow
directionalLight
ambientLight
lightShadow
ambientLightProbe
hemisphereLightProbe
lightProbe

## Helper
spotLightHelper
skeletonHelper
pointLightHelper
hemisphereLightHelper
gridHelper
polarGridHelper
directionalLightHelper
cameraHelper
boxHelper
box3Helper
planeHelper
arrowHelper
axesHelper

## Texture
texture
videoTexture
dataTexture
dataTexture3D
compressedTexture
cubeTexture
canvasTexture
depthTexture
raycaster
vector2
vector3
vector4
euler
matrix3
matrix4
quaternion
bufferAttribute
float16BufferAttribute
float32BufferAttribute
float64BufferAttribute
int8BufferAttribute
int16BufferAttribute
int32BufferAttribute
uint8BufferAttribute
uint16BufferAttribute
uint32BufferAttribute
instancedBufferAttribute
color
fog
fogExp2
shape

## Maps
*map*: add color to the flat surface
*normalMap*: add bumps (depth) to the flat surface
*displacementMap*: change position of verticles, white means high position, black means low position - *displacementScale* + width segment of geometry + height segment of geometry
*roughnessMap*: white means very rough, black means no rough - *roughness*
*aoMap*: highlight shadow area - needs *uv2*
*metalnessMap*
*environmentMap*


# drei
## Controls
*ArcballControls*: camera cầm object xoay
*DragControls*: Kéo thả object
*FirstPersonControls*: góc nhìn thứ nhất, nhưng đứng yên
*FlyControls*: như drone bay xung quanh object
*PointerLockControls*: minecraft, counter strike
*OrbitControls*: camera quay xung quanh 1 object, camera cố định
*TrackballControls*: xoay không gian, camera có thể như quay vòng vòng
*TransformControls*: tương tự orbit, nhưng object có tọa độ