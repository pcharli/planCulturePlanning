const cultures = [
    {
        "label": "poireaux",
        "start": "2025-06-15",
        "end": "2025-09-09",
        "planche": 10,
        "color": "green"
    },
    {
        "label": "choux",
        "start": "2025-05-15",
        "end": "2025-08-19",
        "planche": 8,
        "color": "red"
    },
    {
        "label": "patates",
        "start": "2025-06-15",
        "end": "2025-08-9",
        "planche": 6,
        "color": "blue"
    },
    {
        "label": "test",
        "start": "2025-06-01",
        "end": "2025-08-31",
        "planche": 4,
        "color": "yellow"
    }
]

let planning_start = null
let planning_end = null
let total_planning = duree(planning_start, planning_end)
const planche_height = document.querySelector('.agenda-cell').getBoundingClientRect().height
const planche_width = document.querySelector('.agenda-grid').getBoundingClientRect().width
let oneDay = null

function renderAgenda() {
    monthNumber = currentMonth.getMonth()
    console.log("On doit afficher :", currentMonth.getMonth());
    document.querySelectorAll('.culture').forEach(el => {el.remove()})
    planning_start = `2025-${monthNumber}-01`
    planning_end = `2025-${monthNumber+2}-30`
    console.log(planning_start,' ',planning_end)
    total_planning = duree(planning_start, planning_end)
    console.log('total',total_planning)
    console.log('planche',planche_width)
    oneDay = planche_width/total_planning
    console.log('oneday'+oneDay)
    cultures.forEach(element => {
    add_culture(element)
});
}

function duree (start, end) {
    const d1 = new Date(start);
    const d2 = new Date(end);

    // différence en millisecondes
    const diff = d2 - d1;

    // conversion en jours
    const days = diff / (1000 * 60 * 60 * 24);

    //console.log(days); // 86
    return days
}

function add_culture(culture) {
    const duree1 = duree(culture.start, culture.end)
    console.log(culture.label,duree1)
    const startPosition = duree(planning_start,culture.start) * oneDay
    const template = `
        <div class="culture" style="bottom:calc(52px*${culture.planche-1});margin-left:${startPosition}px;width:calc(${oneDay}px*${duree1});background-color: ${culture.color};">${culture.label} - ${culture.start} au ${culture.end}</div>
    `
    document.querySelector(`.planche-${culture.planche}`).insertAdjacentHTML('afterbegin',template)
}
renderAgenda()
