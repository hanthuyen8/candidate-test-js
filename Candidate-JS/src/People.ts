class SerializableMap<K, V> extends Map<K, V> {
    toJSON() {
        return Object.fromEntries(this);
    }
}

const PeopleData = {
    userData: {
        name: "Alice",
        scores: new SerializableMap<string, number>([
            ["Level 1", 10],
            ["Level 2", 5]
        ]),
        serialize: function () {
            return JSON.stringify(this);
        }
    }
};


export default PeopleData;
