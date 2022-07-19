console.log(`main.js working`)
document.querySelector('#updateButton').addEventListener('click', updateEntry)

async function updateEntry() {
    try {
        console.log(`clicked`)
        const response = await fetch('updateEntry', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: document.getElementsByName('name')[0].value,
                speciesName: document.getElementsByName('speciesName')[0].value,
                features: document.getElementsByName('features')[0].value,
                homeWorld: document.getElementsByName('homeWorld')[0].value,
                image: document.getElementsByName('image')[0].value,
                interestingFacts: document.getElementsByName('interestingFacts')[0].value,
                notableExamples: document.getElementsByName('notableExamples')[0].value
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    } catch(error) {
        console.log(error)
    }
}


document.querySelector('#deleteButton').addEventListener('click', deleteEntry)
async function deleteEntry() {
    const input = document.getElementById('deleteInput')
    try {
        const response = await fetch('deleteEntry', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: input.value
            })
        })
        const data = await response.json()
        location.reload()
    } catch(error) {
        console.log(error)
    }
}

















const aliens = {
    'humans': {
        'speciesName' : 'Humans',
        'homeworld': 'Earth',
        'features':'Rounded ears, hair on head and face (sometimes)',
        'interestingFact': 'Founded the United Federation of Planets after first contact with the Vulcans' ,
        'notableExamples' : "James T. Kirk, Zephram Cochran, Abraham Lincoln",
        'image': 'https://static.wikia.nocookie.net/aliens/images/6/68/The_City_on_the_Edge_of_Forever.jpg'
    },
    'vulcans': {
        'speciesName' : 'Vulcans',
        'homeworld': 'Vulcan',
        'features':'Pointed ears, upward-curving eyebrows',
        'interestingFact': 'Practice an extreme form of emotional regulation that focuses on logic above all else, pioneered by a Vulcan named Surak' ,
        'notableExamples' : "Spock, T'Pol, Sarek",
        'image': 'https://static.wikia.nocookie.net/aliens/images/7/75/Vulcans-FirstContact.jpg'
    },
    'klingons': {
        'speciesName' : 'Klingons',
        'homeworld': "Qo'noS",
        'features':'Large stature, pronounced ridges on the forehead, stylized facial hair',
        'interestingFact': 'Highly skilled in weapons and battle. Their facial ridges were lost as the result of a virus in 2154, but were subsequently restored by 2269.' ,
        'notableExamples' : "Worf, Kor, Kang",
        'image': 'https://static.wikia.nocookie.net/aliens/images/7/74/Kruge.jpg'
    },
    'romulans': {
        'speciesName' : 'Romulans',
        'homeworld': "Romulus",
        'features':'Pointed ears, upward-curving eyebrows,green tinge to the skin, diagonal smooth forehead ridges (sometimes)',
        'interestingFact': 'Share a common ancestory with Vulcans, though none of the emotional discipline. Romulus has a sister planet, Remus, on which the Remans are seen as lesser beings.' ,
        'notableExamples' : "Pardek, Tal'aura, Narissa",
        'image': 'https://static.wikia.nocookie.net/aliens/images/1/1d/Zzzd7.jpg'
    },
    'borg' : {
        'speciesName' : '(The) Borg',
        'homeworld': 'unknown (Delta Quadrant)',
        'features':'pale skin, numerous interior and exterior biological modifications',
        'interestingFact': 'No single genetic lingeage, species propagates by assimilating individuals via nanotechnology, led by a hive mind guided by a single "queen" individual. DO NOT APPROACH unless under specific diplomatic orders from Starfleet Command.' ,
        'notableExamples' : "Borg Queen, Seven of Nine, Locutus",
        'image': 'https://static.wikia.nocookie.net/aliens/images/7/76/Borg.jpg'
    },
    'gorn' : {
        'speciesName' : 'Gorn',
        'homeworld': 'unknown (Alpha Quadrant)',
        'features':'scaly green skin, large, iridescent eyes, powerful build, sharp teeth',
        'interestingFact': 'Extremely militaristic and driven to conquer, but also possess advanced scientific knowledge allowing for superior bio-weapons.' ,
        'notableExamples' : "Gorn Captain",
        'image': 'https://static.wikia.nocookie.net/aliens/images/9/9b/Gorn.jpg'
    },
    'trill' : {
        'speciesName' : 'Trill',
        'homeworld': 'Trill',
        'features':'Outward appearance similar to humans, aside from distinct dark pigment marks running symmetrically down both sides of the face and body',
        'interestingFact': 'Some Trill are willin hosts to a long-lived invertibrate symbiote that merges with the host to create a distinct personality.' ,
        'notableExamples' : "Jadzia Dax, Ezri Dax, Curzon Dax",
        'image': 'https://static.wikia.nocookie.net/aliens/images/4/42/EzriDax.jpg'
    }
}