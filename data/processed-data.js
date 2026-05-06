var characters = 
{
  "narrator":{
    "poses":{
    },
    "name":"Narrator"
  },

  "default":{
    "poses":{
    },
    "name":"MC"
  },

  "teacher":{
    "poses":{
    },
    "name":"Teacher"
  },
  "girl":{
    "poses":{
      "default":"img/girl_happy.png",
      "speaking":"img/girl_happy_speaking.png",
      "nervous":"img/girl_nervous.png",
      "nervous_speaking":"img/girl_nervous_speaking.png"
    },
    "name":"Girl"
  },

  "boy":{
    "poses":{
      "default":"img/boy_happy.png",
      "speaking":"img/boy_happy_speaking.png",
      "nervous": "img/boy_nervous.png",
      "nervous_speaking":"img/boy_nervous_speaking.png"
    },
    "name":"Boy"
  }
}; 
 var places = 
{
    "bedroom": {
        "name": "Bedroom",
        "image": "img/bedroom.png"
    },
    "classroom_hallway": {
        "name": "Classroom Hallway",
        "image": "img/classroom_hallway.png"
    },
    "bus_stop": {
        "name": "Bus Stop",
        "image": "img/bus_stop.png"
    },
    "store": {
        "name": "Store",
        "image": "img/store.png"
    }
}; 
 var story = 
[
    {
        "title": "Start",
        "tags": "",
        "body": "<<place bedroom>>\n{{MC}} Oh no Oh no I'm late!\n{{MC}} What do I do?\n[[Go to school without breakfast.|route_a_start]]\n[[Have a rushed breakfast.|route_b_start]]",
        "position": {
            "x": 600,
            "y": 100
        },
        "colorID": 0
    },
    {
        "title": "route_a_start",
        "tags": "",
        "body": "<<place classroom_hallway>>\nMC quickly gathers their things in their arms in a rush and runs to school.\nMC lives in a dorm near their school so it shouldn't take them too long to get to class right?\nIt's now just one last corner to their class..\nSFX: BAAM\n{{MC}} Aahh\nTheir things fall to the floor, scattering everywhere.\n{{boy,speaking}} Sorry, are you ok?\n{{MC}} I'm fine but my things fell everywhere.\n{{boy}} Let me help you pick them up.\nThey quickly gather their papers and notebooks scattered everywhere.\n{{boy,speaking}} Which class are you in? I'll help you bring these to your room.\n{{MC}} Oh no, It's ok. I'm in room 468 you might be too late for your own class.\n{{boy,speaking}} 468? We're classmates! Let's go quick our teacher is very strict on tardiness.\n[[Hurry to class|late_arrival]]",
        "position": {
            "x": 300,
            "y": 400
        },
        "colorID": 0
    },
    {
        "title": "route_b_start",
        "tags": "",
        "body": "<<place bedroom>>\nThe MC quickly grabbed a breakfast of toasted bread from their pantry.\nMC then grabs their bag and bolts out of their rented dorm.\n<<place bus_stop>>\nMC lives near the school so it shouldn't be a problem to get to school in time.\nJust one last corner and they will be able to see their school gates.\n<<screenshake 15>>\n{{MC}} Aahh!\n{{girl,nervous_speaking}} Bread!\n{{girl,nervous}} Are you ok? Your bread fell.\n{{MC}} I'm ok, but I don't have food for breakfast.\n{{girl,speaking}} Don't worry, I'll buy you one. Let's go to a store.\n<<place store>>\nThey both grab a small breakfast from the general store near the school.\n{{MC}} Won't we be too late if we eat here?\n{{girl,speaking}} It should be fine. We can just say we went to eat the teacher shouldn't get too mad about this.\n{{girl}} What class are you in by the way?\n{{MC}} I'm in class 468.\n{{girl,speaking}} 468? We're classmates.\n{{MC}} We should probably go now, the teacher might get angry if we're too late.\n[[Hurry to class|late_arrival]]",
        "position": {
            "x": 900,
            "y": 400
        },
        "colorID": 0
    },
    {
        "title": "late_arrival",
        "tags": "",
        "body": "<<place classroom_hallway>>\nThey try their best to get to class on time.\nUnfortunately they were still too late.\n<<screenshake 10>>\n{{Teacher}} WHY WERE YOU LATE?\n<<screenshake 10>>\n{{Teacher}} DO YOU EVEN KNOW WHAT TIME IS IT?\n<<screenshake 10>>\n{{Teacher}} YOU ARE 10 MINUTES LATE!\n<<screenshake 10>>\n{{Teacher}} GO STAND OUTSIDE THE CLASSROOM!\n[[Stand outside...|aftermath]]",
        "position": {
            "x": 600,
            "y": 800
        },
        "colorID": 0
    },
    {
        "title": "aftermath",
        "tags": "",
        "body": "<<place classroom_hallway>>\n{{boy,nervous_speaking}} The teacher didn't even let us explain, tsk. <<if route_a>>\n{{girl,nervous_speaking}} Well, at least we aren't hungry. <<if route_b>>\n{{MC}} That's fine, I did end up oversleeping.\n[[End of Demo|end]]",
        "position": {
            "x": 600,
            "y": 1100
        },
        "colorID": 0
    }
]; 
