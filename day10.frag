#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

vec2 center1 = vec2(.3333, .3333);
vec2 center2 = vec2(.6666, .3333);
vec2 center3 = vec2(.9999*.5, .6666);
float length = .3;


void main() {
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    st.x *= u_resolution.x/u_resolution.y;
    
    length = abs(sin(u_time)) * .3;

    vec3 color = vec3(0.0,0.0,0.0);
    color += vec3(step(distance(st,center1),length));
    color += vec3(step(distance(st,center2),length));
    color += vec3(step(distance(st,center3),length));
    color = mod(color,3.0);

    gl_FragColor = vec4(color,1.0);
}