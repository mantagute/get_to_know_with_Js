 // start with strings, numbers and booleans

// if you change the original one directly, it isn't going to change the 'copy'.

    // Let's say we have an array
    const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

    // and we want to make a copy of it.
    const team = players;

    // You might think we can just do something like this:
    team [3] = 'JOAO'
    // however what happens when we update that array?
    console.log(team, players);
    
    // now here is the problem!

    // oh no - we have edited the original array too!

    // Why? It's because that is an array reference, not an array copy. They both point to the same array!

    // So, how do we fix this? We take a copy instead!

    // one way
    const team2 = players.slice();
    team2.push('ANA');
    console.log(team2, players);
    // or create a new array and concat the old one in
    const team3 = [].concat(players);
    team3.push('FRAN');
    console.log(team3, players);

    // or use the new ES6 Spread
    const team4 = [...players];
    team4.push('elis');
    console.log(team4, players);

    const team5 = Array.from(players);
    team5.push('anaa');

    console.log(team5, players);

    // now when we update it, the original one isn't changed

    // The same thing goes for objects, let's say we have a person object

    // with Objects
    const person = {
      name: 'Wes Bos',
      age: 80
    };

    // and think we make a copy:
    const captain = person;
    captain.age = 100;

    console.log(captain, person);
    // how do we take a copy instead?

    const cap2 = Object.assign({}, person, {lucky: true});

    console.log(cap2, person)

    // We will hopefully soon see the object ...spread

    // const cap3 = {...person};

    // Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

    const joao = {
        name: 'joao',
        age: 18,
        social: {
            instagran: '@mantagute',
            linkedin: 'Joao Mantagute'
        }
    }
    console.clear()
    console.log(joao);

    const dev = Object.assign({},joao);
    dev.name = 'ana'

    dev.social.instagran = "anavilani"

    const dev2 = JSON.parse(JSON.stringify(joao));

    dev2.social.linkedin = "frannn";

    console.log(joao, dev, dev2)