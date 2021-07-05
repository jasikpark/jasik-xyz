import CMS from "netlify-cms-app";
import netlifyIdentity from "netlify-identity-widget";
import { YoutubeShortcode } from "./editor-components/youtube.js";
import { GistShortcode } from "./editor-components/gist";
import { TwitterShortcode } from "./editor-components/twitter.js";
import { VimeoShortcode } from "./editor-components/vimeo.js";
import { OptimizedImgShortcode } from "./editor-components/optimized-img.js";
import { WaybackShortcode } from "./editor-components/wayback.js";

window.netlifyIdentity = netlifyIdentity;
// You must run this once before trying to interact with the widget
netlifyIdentity.init();

// Initialize the CMS object
CMS.init();

// Register all of our shortcodes
CMS.registerEditorComponent(YoutubeShortcode);
CMS.registerEditorComponent(GistShortcode);
CMS.registerEditorComponent(TwitterShortcode);
CMS.registerEditorComponent(VimeoShortcode);
CMS.registerEditorComponent(OptimizedImgShortcode);
CMS.registerEditorComponent(WaybackShortcode);
