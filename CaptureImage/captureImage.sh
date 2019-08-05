#"!/bin/bash

DATE=$(date "+%Y%m%d%H%M%S")

fswebcam -r 640x480 --no-title --no-banner --no-shadow /home/pi/photo/$DATE.jpg
