

// convertion
export const convertSpaces = (text) => {
  return text.replace(/\s/g, "%20");
};

export const convertLineBreaks = (text) => {
  return text.replace(/(?:\r\n|\r|\n)/g, "%0A");
};

export const convertHash = (text) => {
  return text.replace(/[#_]/g, "%23");
};

// detection
export const detectUrls = (text) => {
  let urlRegex = /(https?:\/\/[^\s]+)/g;

  return text.replace(urlRegex, function (url) {
    url = url.replace(/^https?:\/\//, "");
    return `<a href="https://${url}" target="_blank" class="twitterHighlight">${url}</a>`;
  });
};

export const detectHashtags = (text) => {
  return text.replace(/(?:\s|^)#([^\s]+)/g, (hashtag) => {
    return `<a class="twitterHighlight" href="https://twitter.com/hashtag/${hashtag.slice(
      2
    )}" target="_blank">${hashtag}</a>`;
  });
};

export const detectMentions = (text) => {
  return text.replace(/([@])([a-z])\w+/gim, (user) => {
    return `<a class='twitterHighlight' href='https://twitter.com/${user.slice(
      1
    )}' target="_blank">${user}</a>`;
  });
};
