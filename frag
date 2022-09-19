precision mediump float;

uniform vec2 u_resolution;
uniform mediump vec2 a, b, start;
uniform float h;

void main(){
    vec2 c = (gl_FragCoord.xy + a) * b;
    vec2 z = c;
    float tmp = 0.0, J, sinJ, sinJ2, sinJ3, sinJ4;
    for (float i = 0.0; i < 360.0; i += 4.0) {
        if (z.x * z.x + z.y * z.y < 8.0) {
            tmp = z.x * z.x + z.y * z.y + start.x;
            z.y = 2.0 * abs(z.x * z.y) + start.y;
            z.x = tmp;
            J = i;
        }
    }

    if (z.x * z.x + z.y * z.y > 4.0) {
        sinJ = sin(J * 0.01745);
        sinJ2 = sinJ * sinJ;
        sinJ3 = sinJ2 * sinJ;
        sinJ4 = sinJ3 * sinJ;

    gl_FragColor = vec4(
        abs(0.0 * sinJ4 - 0.809 * sinJ3 - 2.739 * sinJ2 + 0.715 * sinJ + 0.2),
        abs(-2.086 * sinJ4 + 1.808 * sinJ3 + 2.5755 * sinJ2 - 1.396 * sinJ + 0.024),
        abs(1.287 * sinJ4 - 1.37 * sinJ3 - 2.166 * sinJ2 + 1.265 * sinJ + 0.5),
        1.0);
    } else {
        gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
    }
}

