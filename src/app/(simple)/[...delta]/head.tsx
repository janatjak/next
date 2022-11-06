const ucfirst = (s: string | undefined) => (s !== undefined ? s.charAt(0).toUpperCase() + s.slice(1) : "???");

const Head = ({ params }: any) => (
    <>
        <title>{ucfirst(params.delta[0])}</title>
    </>
);

export default Head;
