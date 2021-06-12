app.get('/api/ping', (_, res) => {
    res.json({ "success": true});
    });

app.get('/api/posts', (_,res) => {
    res.json({ "success": true});
});