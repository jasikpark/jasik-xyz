+++
Title = "Minimizing the first-install XCode.app size"
Date = 2021-06-09T00:34:05.479Z
Type = "post"
Draft = false
isMath = false
+++
I'm glad that I found [Saving up to 8.5GB of Space After Every Apple Xcode Update](https://macperformanceguide.com/blog/2016/20161031_1600-XCode-saving-space.html) to help me deal with the fact that my vanilla XCode.app install was 17GB!

It boiled down to just remove the platforms you aren't using, which for me is anything and everything that isn't macOS.

Also [Dev Cleaner](https://apps.apple.com/us/app/devcleaner-for-xcode/id1388020431) [github](https://github.com/vashpan/xcode-dev-cleaner) seems helpful for keeping my XCode.app install from growing continuously by deleting old caches and simulators and whatnot in a nice UI: [Squeezing Xcode for hard drive space](https://medium.com/flawless-app-stories/saving-space-as-an-ios-developer-c09f5b6af395)
