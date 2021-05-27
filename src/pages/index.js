const apis = ['go', 'node', 'py', 'rb', 'ts'];

const Index = () => {
    return <div>
        <ul>
            {apis.map(api => <li key={api}><a href={`/api/${api}`} target="_blank">{api}</a></li>)}
        </ul>
    </div>;
}

export default Index;
