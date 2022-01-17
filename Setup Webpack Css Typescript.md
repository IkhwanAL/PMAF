1. Install --save-dev typings-for-css-modules-loader
2. Setup Webpack Config in Node_Modules react-scrips/config/webpack.config.js
3. Add
    module: {
        rules: [
            {
                test: /\.css$/,
                include: path.join(__dirname, 'src/Components'),
                use: [
                    'style-loader',
                    {
                    loader: 'typings-for-css-modules-loader',
                    options: {
                        modules: true,
                        namedExport: true
                    }
                    }
                ]
            }
        ]
    }
4. Add [filename].css.d.ts in src/Components
