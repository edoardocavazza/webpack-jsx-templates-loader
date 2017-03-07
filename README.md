# jsx-template-loader
A webpack loader to include JSX files with custom imports.

---

## Install
```
npm install --save-dev jsx-templates-loader
```

---

## Usage

Write a JSX file:
```jsx
<div class="my-component">
	<span>Hello</span>
</div>
```

Import a JSX file in your js file:
```js
import template from './my-component.jsx';
```

---

## Config

**webpack.config.js**
```js
{
	module: {
		rules: [
			{
                enforce: 'pre',
                test: /\.jsx$/,
                loaders: [
                    'external-jsx-loader',
                ],
				query: {
					// import your custom hyperscript library at the top of the JSX file
					importsHeader: "import React from 'react'",
				}
            },
			{
                test: /\.jsx$/,
                use: [
                    'babel-loader',
                ],
            },
		],
	}
}
```

**.babelrc**
```js
{
	"plugins": [
		// tell to babel to use your custom hyperscript function using `pragma`
        ["transform-react-jsx", { "pragma": "React" }]
    ]
}
```
