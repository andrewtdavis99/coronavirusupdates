export default {
    search: function(searchTerm, SearchLimit, sortBy) {
        return fetch('https://www.reddit.com/r/coronavirus.json?limit=100')
        .then(res => res.json())
        .then(data => data.data.children.map(data => data.data))
        .catch(err => console.log(err));
    }
};

