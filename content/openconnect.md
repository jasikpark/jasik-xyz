+++
Title = "Use openconnect instead of Cisco AnyConnect"
Type = "post"
Date = "2021-01-09T13:08:59-06:00"
+++

If you need to use the Cisco Anyconnect client for using your school's vpn, you can use an open source and much lighter weight client called [openconnect](https://www.infradead.org/openconnect/index.html) - [MIT reccomends using it in their IT documentation](https://kb.mit.edu/confluence/pages/viewpage.action?pageId=152588205).

To install on macOS:

1. Install openconnect `brew install openconnect`
2. Install the [macOS TUN/TAP driver](http://tuntaposx.sourceforge.net/)

I had no problems using it, other than not being a student anymore!

Alternative instructions: https://gist.github.com/moklett/3170636
