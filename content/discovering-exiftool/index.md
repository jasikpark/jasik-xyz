+++
Description = ""
Tags = []
Categories = []
Type = "post"
Date = "2019-12-31T20:30:40-06:00"
Title = "Discovering exiftool"
Draft = "true"
+++

So something that I discovered a little bit ago was that I didn't think about removing EXIF data from images, and so I manually used the `view info` dialogue in Windows to remove the private data from the photos. 

In making [A Day on the Trails]({{< ref "/day-on-the-trails/index.md" >}}), I wanted to make sure that I wasn't including any of that info, so I looked for a more UNIX approach and found [`exiftool`](https://exiftool.org/). 

To install on macOS: `brew install exiftool` :P

It's found a lot more data than I expected:

```
calebjasik@Calebs-MacBook-Pro day-on-the-trails % exiftool ips-044B4F7A-A39D-457B-8611-6EC795937010.mp4 
ExifTool Version Number         : 11.70
File Name                       : ips-044B4F7A-A39D-457B-8611-6EC795937010.mp4
Directory                       : .
File Size                       : 6.3 MB
File Modification Date/Time     : 2019:12:31 20:21:06-06:00
File Access Date/Time           : 2019:12:31 20:21:06-06:00
File Inode Change Date/Time     : 2019:12:31 20:29:37-06:00
File Permissions                : rw-r--r--
File Type                       : MP4
File Type Extension             : mp4
MIME Type                       : video/mp4
Major Brand                     : MP4 v2 [ISO 14496-14]
Minor Version                   : 0.0.1
Compatible Brands               : isom, mp41, mp42
Movie Data Size                 : 6552485
Movie Data Offset               : 44
Movie Header Version            : 0
Create Date                     : 2020:01:01 02:21:04
Modify Date                     : 2020:01:01 02:21:06
Time Scale                      : 44100
Duration                        : 9.97 s
Preferred Rate                  : 1
Preferred Volume                : 100.00%
Preview Time                    : 0 s
Preview Duration                : 0 s
Poster Time                     : 0 s
Selection Time                  : 0 s
Selection Duration              : 0 s
Current Time                    : 0 s
Next Track ID                   : 3
Track Header Version            : 0
Track Create Date               : 2020:01:01 02:21:04
Track Modify Date               : 2020:01:01 02:21:06
Track ID                        : 1
Track Duration                  : 9.97 s
Track Layer                     : 0
Track Volume                    : 100.00%
Balance                         : 0
Audio Format                    : mp4a
Audio Channels                  : 2
Audio Bits Per Sample           : 16
Audio Sample Rate               : 44100
Matrix Structure                : 1 0 0 0 1 0 0 0 1
Image Width                     : 720
Image Height                    : 1280
Media Header Version            : 0
Media Create Date               : 2020:01:01 02:21:04
Media Modify Date               : 2020:01:01 02:21:06
Media Time Scale                : 600
Media Duration                  : 10.01 s
Media Language Code             : und
Handler Type                    : Video Track
Handler Description             : Core Media Video
Graphics Mode                   : srcCopy
Op Color                        : 0 0 0
Compressor ID                   : avc1
Source Image Width              : 720
Source Image Height             : 1280
X Resolution                    : 72
Y Resolution                    : 72
Bit Depth                       : 24
Video Frame Rate                : 29.98
Date/Time Original              : 2019:12:27 13:41:47-06:00
Image Size                      : 720x1280
Megapixels                      : 0.922
Avg Bitrate                     : 5.26 Mbps
Rotation                        : 0
```

The really nice part is that you can then drill down into the details you want by using `grep`.

```
calebjasik@Calebs-MacBook-Pro jasik-xyz % exiftool content/day-on-the-trails/IMG_4040.jpeg | grep -i exposure
Exposure Time                   : 1/275
Exposure Program                : Program AE
Exposure Compensation           : 0
Exposure Mode                   : Auto
```

The `-i` asks `grep` to be insensitive to case, so that 'Exposure' and 'exposure' and 'ExPoSuRe' will all match!