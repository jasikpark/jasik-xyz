/** @type {import('netlify-cms-core').EditorComponentOptions} */
export let WaybackShortcode = {
  id: "wayback",
  label: "Wayback Link",
  fields: [
    {
      name: "href",
      label: "Link Href",
      widget: "string",
    },
  ],
  pattern: /{{< [ ]*wayback href="([\S]+)"[ ]* >}}/,
  fromBlock: function (match) {
    return {
      href: match[1],
    };
  },
  toBlock: function (obj) {
    return `{{< wayback href="${obj.href}" >}}`;
  },
  toPreview: function (obj) {
    return `
  <a
    class="wayback"
    title="Wayback Machine Link"
    href="${obj.href}"
  >
    <svg
      aria-hidden="true"
      alt="Wayback Machine Link"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 599.998 583.111"
    >
      <path
        d="M146.564 60.034l-6.583-18.256H117.6l-6.583 18.256h-5.441L123.042 12.2c.351-.878 1.492-4.389 1.492-5.178 0-3.687-4.038-3.687-6.758-4.125V.965h16.5l21.416 59.068h-9.128zm-18.081-48.01l-9.391 25.629h19.397l-10.006-25.629zM221.758 60.034l-15.535-27.296h-5.441v27.296h-9.655V12.901c0-8.426 0-8.776-8.338-10.005V.965h22.557c10.62 0 23.785 2.282 23.785 15.71 0 8.865-5.09 13.166-13.429 14.482l16.15 28.876h-10.094zM206.662 5.09c-6.319 0-5.88 2.37-5.88 7.899v15.623h5.002c7.636 0 13.692-2.809 13.692-11.41 0-8.689-4.476-12.112-12.814-12.112zM287.723 60.911c-20.187 0-25.892-13.077-25.892-31.246 0-16.939 5.617-28.964 24.488-28.964 5.968 0 11.936.79 17.554 2.633l.526 14.658h-2.545c-.176-1.843-.878-3.774-1.843-5.354-2.722-4.74-7.286-7.724-12.815-7.724-13.253 0-15.008 14.57-15.008 24.751 0 10.883 3.335 26.331 17.027 26.331 5.793 0 10.621-1.141 15.36-4.477v6.056c-5.53 2.459-10.797 3.336-16.852 3.336zM376.778 60.034V31.333h-23.872v28.701h-9.655V12.551c0-7.636-1.404-7.812-8.776-8.601V2.019L352.906 0v27.208h23.872V.965h9.655v59.068h-9.655zM420.354 60.034V57.84c6.583 0 7.461-1.755 7.461-8.163v-37.74c0-6.407-.878-8.163-7.461-8.163V1.58h24.575v2.194c-6.582 0-7.46 1.843-7.46 8.163v37.74c0 6.32.878 8.163 7.46 8.163v2.194h-24.575zM509.035 60.034h-7.636L484.196 12.2c-2.633-7.373-3.071-7.899-10.619-9.304V.965h17.026l17.203 48.097h.175L524.746.965h5.705l-21.416 59.069zM599.734 60.034h-35.02V12.901c0-8.426-.088-8.688-8.339-10.005V.965h42.042l.264 12.99h-2.458c0-6.583-3.247-8.865-9.479-8.865h-6.847c-4.037 0-5.529.088-5.529 4.564V27.12h10.62c5.003 0 6.407-2.282 7.197-6.758h2.457v18.432h-2.457c0-4.916-2.106-7.548-7.197-7.548h-10.62v19.572c0 4.828 1.054 5.091 5.529 5.091h9.743c5.968 0 7.46-2.984 7.898-8.602h2.458l-.262 12.727zM139.201 558.561h423.263v21.705H139.201zM155.897 516.818h390.704v30.055H155.897zM153.393 174.535H542.01v41.742H153.393zM347.701 101.486L144.21 149.072l11.687 12.94H539.506l11.687-12.94z"
      />
      <g>
        <path
          d="M59.068 583.111h-2.194c0-6.582-1.755-7.46-8.163-7.46h-37.74c-6.407 0-8.162.878-8.162 7.46H.614v-24.575h2.194c0 6.583 1.843 7.461 8.162 7.461h37.741c6.319 0 8.163-.878 8.163-7.461h2.194v24.575zM59.068 486.655L9.127 515.619v.176h49.941v5.529H11.234c-8.25 0-7.899 1.316-9.304 8.776H0v-18.519l47.746-27.648v-.175H0v-5.529h59.068v8.426zM12.989 399.853c-6.846 0-8.864 2.984-8.864 9.567v5.968h54.943v9.655H4.125v6.056c0 6.67 1.931 8.952 8.601 9.479v2.458L0 442.685v-44.938l12.989-.351v2.457zM59.068 327.093v35.021H11.936c-8.426 0-8.688.087-10.005 8.338H0V328.41l12.989-.263v2.457c-6.583 0-8.864 3.248-8.864 9.479v6.846c0 4.037.088 5.529 4.564 5.529h17.466v-10.62c0-5.002-2.282-6.406-6.758-7.197v-2.457h18.432v2.457c-4.915 0-7.548 2.106-7.548 7.197v10.62h19.572c4.828 0 5.091-1.053 5.091-5.529v-9.742c0-5.969-2.984-7.46-8.602-7.899v-2.457l12.726.262zM59.068 256.44l-27.296 15.535v5.442h27.296v9.654H11.936c-8.426 0-8.776 0-10.005 8.338H0v-22.556c0-10.62 2.282-23.786 15.71-23.786 8.864 0 13.166 5.091 14.481 13.429l28.876-16.149v10.093zM4.125 271.536c0 6.32 2.37 5.881 7.899 5.881h15.623v-5.003c0-7.636-2.809-13.692-11.41-13.692-8.689 0-12.112 4.476-12.112 12.814zM59.068 173.938L9.127 202.902v.176h49.941v5.529H11.234c-8.25 0-7.899 1.316-9.304 8.777H0v-18.519l47.746-27.647v-.175H0v-5.53h59.068v8.425zM59.068 87.662v35.021H11.936c-8.426 0-8.688.087-10.005 8.337H0V88.979l12.989-.263v2.458c-6.583 0-8.864 3.247-8.864 9.479v6.846c0 4.037.088 5.529 4.564 5.529h17.466v-10.62c0-5.003-2.282-6.407-6.758-7.197v-2.458h18.432v2.458c-4.915 0-7.548 2.106-7.548 7.197v10.62h19.572c4.828 0 5.091-1.053 5.091-5.529v-9.743c0-5.968-2.984-7.46-8.602-7.899v-2.458l12.726.263zM12.989 12.182c-6.846 0-8.864 2.984-8.864 9.567v5.969h54.943v9.654H4.125v6.056c0 6.671 1.931 8.953 8.601 9.479v2.458L0 55.013V10.075l12.989-.351v2.458z"
        />
      </g>
      <path
        d="M209.446 348.42c-.335-20.5-.866-41.001-1.669-61.487-.756-19.302-2-38.585-2.939-57.881-.081-1.666-.787-2.026-2.169-2.328-5.693-1.241-11.416-1.824-17.163-1.833-5.747.009-11.47.592-17.163 1.833-1.382.301-2.088.662-2.169 2.328-.939 19.296-2.183 38.579-2.939 57.881-.803 20.486-1.335 40.987-1.669 61.487-.237 14.528-.09 29.067.14 43.599.254 16.121.612 32.246 1.265 48.355.7 17.288 1.782 34.562 2.731 51.839.182 3.311.521 6.613.78 9.831 6.379 1.66 12.704 2.619 19.025 2.698 6.321-.079 12.645-1.038 19.025-2.698.259-3.218.597-6.521.779-9.831.949-17.277 2.031-34.551 2.731-51.839.653-16.109 1.011-32.234 1.265-48.355.229-14.532.377-29.071.139-43.599zM315.257 348.42c-.335-20.5-.867-41.001-1.67-61.487-.757-19.302-2.001-38.585-2.939-57.881-.081-1.666-.786-2.026-2.169-2.328-5.692-1.241-11.416-1.824-17.162-1.833-5.747.009-11.47.592-17.163 1.833-1.382.301-2.088.662-2.169 2.328-.938 19.296-2.183 38.579-2.939 57.881-.803 20.486-1.335 40.987-1.669 61.487-.237 14.528-.09 29.067.139 43.599.255 16.121.612 32.246 1.265 48.355.701 17.288 1.782 34.562 2.731 51.839.182 3.311.521 6.613.779 9.831 6.38 1.66 12.705 2.619 19.025 2.698 6.321-.079 12.645-1.038 19.025-2.698.258-3.218.597-6.521.779-9.831.948-17.277 2.03-34.551 2.73-51.839.653-16.109 1.011-32.234 1.266-48.355.231-14.532.378-29.071.141-43.599zM437.972 348.42c-.335-20.5-.866-41.001-1.67-61.487-.756-19.302-2-38.585-2.938-57.881-.082-1.666-.787-2.026-2.17-2.328-5.692-1.241-11.415-1.824-17.162-1.833-5.747.009-11.47.592-17.163 1.833-1.382.301-2.088.662-2.169 2.328-.938 19.296-2.183 38.579-2.938 57.881-.804 20.486-1.335 40.987-1.67 61.487-.237 14.528-.09 29.067.14 43.599.255 16.121.612 32.246 1.265 48.355.701 17.288 1.782 34.562 2.731 51.839.183 3.311.521 6.613.779 9.831 6.38 1.66 12.704 2.619 19.025 2.698 6.321-.079 12.645-1.038 19.025-2.698.258-3.218.597-6.521.779-9.831.949-17.277 2.03-34.551 2.731-51.839.652-16.109 1.01-32.234 1.265-48.355.23-14.532.377-29.071.14-43.599zM541.277 348.42c-.335-20.5-.866-41.001-1.669-61.487-.757-19.302-2.001-38.585-2.939-57.881-.082-1.666-.787-2.026-2.17-2.328-5.691-1.241-11.415-1.824-17.162-1.833-5.746.009-11.47.592-17.162 1.833-1.383.301-2.088.662-2.169 2.328-.939 19.296-2.184 38.579-2.939 57.881-.803 20.486-1.335 40.987-1.67 61.487-.237 14.528-.09 29.067.14 43.599.255 16.121.612 32.246 1.266 48.355.7 17.288 1.782 34.562 2.73 51.839.183 3.311.521 6.613.779 9.831 6.381 1.66 12.705 2.619 19.025 2.698 6.321-.079 12.646-1.038 19.025-2.698.259-3.218.597-6.521.779-9.831.949-17.277 2.031-34.551 2.731-51.839.653-16.109 1.01-32.234 1.265-48.355.23-14.532.378-29.071.14-43.599z"
      />
    </svg>
    <span class="sr-only">Wayback Machine Link</span>
  </a>`;
  },
};
