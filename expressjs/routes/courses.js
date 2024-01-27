const express = require("express");
const router = express.Router;
const Joi = require("joi");

const courses = [
  {
    id: 1,
    name: "course1",
  },
  {
    id: 2,
    name: "course2",
  },
  {
    id: 3,
    name: "course3",
  },
];

router.get("/", (req, res) => {
  res.send(courses);
});

router.get("/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course)
    return res.status(404).send("Course with the given ID not found");
  res.send(course);
});

router.post("/", (req, res) => {
  const { error } = validateSchema(req.body);

  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(course);
  res.send(course);
});

router.put("/:id", (req, res) => {
  //check if the user is present if not present send 404 error
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).send("User with given Id is not present");

  //res.send(course);

  //check if user input valid-if not-send 400 bad request
  const { error } = validateSchema(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  //update the user
  course.name = req.body.name;
  res.send(course);
});

const validateSchema = (course) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
  });
  return schema.validate(course);
};

router.delete("/:id", (req, res) => {
  //check if the user is present if not present send 404 error
  let course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).send("User with given Id is not present");

  //if id is present -delete
  const index = courses.indexOf(course);
  courses.splice(index, 1);
  res.send(courses);
});

module.exports = router;
