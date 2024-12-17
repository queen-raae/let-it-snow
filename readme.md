# @raae/let-it-snow

_Add some old school cheer to your site with falling snow this holiday season_ ❄️❄️❄️

Heavily inspired by my memory of snow falling on my WordPress blog way back when...

&nbsp;

## A message or two or three from Queen Raae 👑

### 1-on-1 Emergency Call

Are you stuck on a reef in the sharky waters of the World Wide Web? Check out [1-on-1 Emergency Call](https://queen.raae.codes/gatsby-emergency/) with Queen Raae to get friendly advice you can put into action immediately from a seasoned web developer.

### Stay updated and get to know Queen Raae & family

Stay updated on the script and get to know Queen Raae & family by [subscribing](https://queen.raae.codes/emails/?utm_source=readme&utm_campaign=let-it-snow) to emails (roughly twice a month).

&nbsp;

## How to use

Add the script to your website.

```html
<script
  src="https://cdn.jsdelivr.net/npm/@raae/let-it-snow@latest/dist/snowfall.js"
  async
></script>
```

## Script Options

### Colors

You can decide the color of the snow flakes. Each snowflake gets a random color from the list.\
**Type:** Comma separated list of hex colors, or css variable names resolving to hex colors.\
**Default:** `"#fff"`

```html
<script
  async
  src="https://cdn.jsdelivr.net/npm/@raae/let-it-snow@latest/dist/snowfall.js"
  data-colors="#fff000, --snow-color-1, --snow-color-2"
></script>
```

### Intensity

You can choose the intensity of the snow.\
**Type**: One of "light", "regular" or "blizzard".\
**Default:** `"regular"`

```html
<script
  src="https://cdn.jsdelivr.net/npm/@raae/let-it-snow@latest/dist/snowfall.js"
  data-intensity="blizzard"
  async
></script>
```

### Duration

You can decide how long the snow should fall for.\
**Type**: Positive integer of seconds.\
**Default:** `"15"`

```html
<script
  src="https://cdn.jsdelivr.net/npm/@raae/let-it-snow@latest/dist/snowfall.js"
  data-duration="30"
  async
></script>
```

### Season

You may decide the time of year the snow should fall.\
**Type**: Comma separated dates, starting with the first day of the season and ending with the last day of the season.\
**Default:** `"December 1, January 4"`

```html
<script
  src="https://cdn.jsdelivr.net/npm/@raae/let-it-snow@latest/dist/snowfall.js"
  data-season="December 1, January 4"
  async
></script>
```

### Log Level

You can decide the log level of the script.\
**Type**: One of "error", "warn", "info" or "silent".\
**Default:** `"warn"`

```html
<script
  src="https://cdn.jsdelivr.net/npm/@raae/let-it-snow@latest/dist/snowfall.js"
  data-log-level="debug"
  async
></script>
```

## Powered by Canvas Confetti 🎉

Under the hood this plugin uses the amazing [Canvas Confetti](https://github.com/catdad/canvas-confetti) by [@kirilv](https://twitter.com/kirilv).

### Questions, Feedback and Suggestions

Do not be shy!

If you have any questions, feedback or suggestions head on over to [discussions](https://github.com/queen-raae/let-it-snow/discussions).

### Bugs

If you find a bug please open an [issue](https://github.com/queen-raae/let-it-snow/issues) and/or create a pull request to fix it.
