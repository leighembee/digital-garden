### Barnsley Fern
[barnsley fern](https://en.wikipedia.org/wiki/Barnsley_fern)
- translate the barnsley fern algorithim into code

_The first point drawn is at the origin `(x0 = 0, y0 = 0)`_

- 2D space
- start at coordinates `0,0`


_new points are iteratively computed by randomly applying one of the four coordinate transformations:_
![photo from wikipedia of coordinate transformations](https://wikimedia.org/api/rest_v1/media/math/render/svg/18893d23fb20a00b6f12b2c6f09afe14f5071194)

each transformation has a probability and is responsible for generating a different portion of the fern:

|  |  | probability<br> factor | portion<br> generated |
---- | ---- | --- | --- |
*f~1~* | _x~n~ = 0_<br> _y~n~ = 0.16 * y_ | 0.01 | stem |
*f~2~* | _x~n~ = 0.85 * x + 0.04 * y_<br> _y~n~ = -0.04 * x + 0.85 * y + 1.6_ | 0.85 | smaller leaflets |
*f~3~* | _x~n~ = 0.2 * x - 0.26 * y_<br> _y~n~ = 0.23 * x + 0.22 * y + 1.6_ | 0.07 | Largest <br>left-hand leaflet |
*f~4~* | _x~n~ = -0.15 * x + 0.28 * y_<br> _y~n~ = 0.26 * x + 0.24 * y + 0.44_ | 0.07 | Largest <br>right-hand leaflet |




```


```