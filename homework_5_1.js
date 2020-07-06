const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

let employersNames = employers.filter(name => name).map((item) => item.toLowerCase().trim());

const sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};

const calcCash = (cash = 0) => cash.reduce((a, b) => a + b);

let money = calcCash(sponsors.cash);

function makeBusiness({owner, director = 'Victor', cash, emp}) {
    const {
        eu,
        rus
    } = sponsors,
    sumSponsors = [...eu, ...rus, 'unexpected sponsor'];
    console.log(`We have a business. Owner: '${owner}', director: '${director}'. Our budget: '${cash}'. And our employers: '${emp.join(', ')}'`);
    console.log('And we have a sponsors: ');
    console.log(sumSponsors.join(' '));
    console.log(`Note. Be careful with ${eu[0]}. It's a huge risk.`);
}
makeBusiness({owner: 'Sam', cash: money, emp: employersNames});