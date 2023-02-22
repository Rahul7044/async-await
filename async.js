
    console.log('person1: shows ticket');
    console.log('person2: shows ticket');
async function preMovie() {
    const promiseWifeBringingTickets = new Promise((resolve,reject) => {
        setTimeout( () =>
        resolve('ticket'),3000);
    });
    const getPopcorn = new Promise((resolve,reject) =>
    resolve('popcorn'));
    const getButter = new Promise((resolve,reject) =>
    resolve('butter'));
    let getColdDrinks = new Promise((resolve,reject) =>
    resolve('colddrinks'));
    let ticket = await promiseWifeBringingTickets;
     let[popcorn, colddrinks,butter] = await Promise.all([getPopcorn, getColdDrinks, getButter]);
     console.log(`${popcorn}, ${colddrinks},${butter}`);
    }
    preMovie().then((m) => console.log('person3:shows ticket'));
    console.log('person4: shows ticket');
    console.log('person5: shows ticket');


