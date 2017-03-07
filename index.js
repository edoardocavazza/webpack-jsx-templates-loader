const loaderUtils = require('loader-utils');
const DEFAULT_IMPORT = 'import React from \'react\'';

module.exports = function(source) {
    const query = loaderUtils.getLoaderConfig(this, 'externalJsxLoader') || {};
    const prefix = query.importsHeader ? JSON.parse(query.importsHeader) : DEFAULT_IMPORT;

    return `${prefix}
export default function template() { return ${source} };
`;
};
