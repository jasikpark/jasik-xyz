+++
Date = "2021-01-11T15:58:31-06:00"
Type = "post"
Title = "Archiving the Internet for myself"
+++

I would really like to get setup with an archiving setup - I frequently want to find something that I've read previously and duckduckgo/google is only so good - I save useful bookmarks in a very generous way to firefox bookmarks and pinboard w/ archive utility, and I occasionally use the <a href="https://bear.app/faq/Extensions/Browser%20extensions/"
data-versionurl="https://web.archive.org/web/20210111220554/https://bear.app/faq/Extensions/Browser%20extensions/"
data-versiondate="2021-01-11">Bear.app web clipper</a> or the <a href="https://github.com/VerifiedJoseph/Save-to-the-Wayback-Machine"
data-versionurl="https://web.archive.org/web/20210111225543/https://github.com/VerifiedJoseph/Save-to-the-Wayback-Machine"
data-versiondate="2021-01-11">Save to the Wayback Machine web extension</a>, but I want to set something up like <a href="https://www.gwern.net/Archiving-URLs"
data-versionurl="https://web.archive.org/web/20210111225640/https://www.gwern.net/Archiving-URLs"
data-versiondate="2021-01-11">gwern's archiving setup</a> which most usefully to me involves piping firefox history into a deduped local archive of the websites you visit + a `filter-urls` utility to make sure less useful stuff like searches are saved. Another very useful tool is either searching my twitter feed with the "only people I follow" switch on, and searching my rss feed on <a href="https://feedbin.com/home"
data-versionurl="https://archive.li/wip/z2kLi"
data-versiondate="2021-01-11">Feedbin</a>.

I might end up using my Raspberry PI 3b+ for this, it can finally get some use!

I just found <a href="https://robustlinks.mementoweb.org/"
data-versionurl="https://web.archive.org/web/20210109040623/https://robustlinks.mementoweb.org/"
data-versiondate="2021-01-11">Robust Links</a> which seems like a good place to start for making the stuff I link to available in a vaguely accessible way. You can click on the dropdown to get the backup link.

Now just to figure out how to integrate that into hugo? so that the backup can happen in a cached way at build time rather than requiring me to go to <a href="https://robustlinks.mementoweb.org/"
data-versionurl="https://web.archive.org/web/20210109040623/https://robustlinks.mementoweb.org/"
data-versiondate="2021-01-11">Robust Links</a> and manually create a "robust link".