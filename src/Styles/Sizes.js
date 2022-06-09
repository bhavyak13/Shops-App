const Sizes = {
    up() { },
    down(size) {
        const sizes = {
            xs: "591.98px",
            sm: "767.98px",
            md: "991.98px",
            lg: "1199.98px",
            xl: "1600px",
        };
        return `@media (max-width: ${sizes[size]})`;
    }
}
export default Sizes;