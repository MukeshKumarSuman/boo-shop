class Utils {
    decamelize(content, separator) {
        separator = typeof separator === 'undefined' ? ' ' : separator;
        content = content.replace(/([a-z\d])([A-Z])/g, '$1' + separator + '$2');
        content = content.charAt(0).toUpperCase() + content.slice(1);
        return content;
    }
}

export default new Utils();