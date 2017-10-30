# Viewport Slider, React

**react-viewport-slider** is a react component (obviously) that displays a sequence of contents using 100% of the viewport with and height.

[![NPM info](https://nodei.co/npm/react-viewport-slider.png?downloads=true)](https://www.npmjs.com/package/react-viewport-slider)

[![Travis build status](https://travis-ci.org/daviferreira/react-viewport-slider.svg?branch=master)](https://travis-ci.org/daviferreira/react-viewport-slider) [![Dependency Status](https://david-dm.org/daviferreira/react-viewport-slider.svg)](https://david-dm.org/daviferreira/react-viewport-slider) [![devDependency Status](https://david-dm.org/daviferreira/react-viewport-slider/dev-status.svg)](https://david-dm.org/daviferreira/react-viewport-slider#info=devDependencies)

## Usage

### CommonJS

Install via NPM:

```
npm install react-viewport-slider
```

Then:

```javascript
import Slider from ‘react-viewport-slider’;

…

	render: function () {
		return (
      <Slider>
        <Slider.Item style={{ backgroundColor: '#a2d7c7' }}>
          <div className="content">Hello, world.</div>
        </Slider.Item>
        <Slider.Item style={{ backgroundColor: '#353330' }}>
          <div className="content">Sup?</div>
        </Slider.Item>
        <Slider.Item className="has-overlay" style={{ backgroundImage: `url(${wallpaper})`, backgroundSize: 'cover' }}>
          <div className="content">Yo.</div>
        </Slider.Item>
      </Slider>

		);
	}

…

```

### Browser

Download or install via bower:

```
bower install react-viewport-slider
```

Then:

```html
<script src="http://cdnjs.cloudflare.com/ajax/libs/react/0.14.0-rc1/react.js" type="text/javascript" charset="utf-8"></script>
<script src="http://cdnjs.cloudflare.com/ajax/libs/react/0.14.0-rc1/react-dom.js" type="text/javascript" charset="utf-8"></script>
<script src=“react-viewport-slider/dist/react-viewport-slider.js” type=“text/javascript” charset=“utf-8”></script>
```

```javascript
<script type=“text/jsx”>
React.render(
    <ViewportSlider>
			…
    </ViewportSlider>,
    document.getElementById(‘example’)
);
</script>
```

## development

```
npm install

npm run demo

npm test
```

## LICENSE

MIT: https://github.com/daviferreira/react-viewport-slider/blob/master/LICENSE
