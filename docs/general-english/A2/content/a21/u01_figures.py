"""Unit 1 figures. Every label word must already appear in the unit text (G18)."""
import figures as F

FIGURES = {
 1: lambda: F.category_set(
        [('Nurse', 'nurse'), ('Shop assistant', 'shop'), ('Teacher', 'school'),
         ('Bus driver', 'bus'), ('Cook', 'kitchen'), ('Student', 'book')],
        height=600,
        alt='Six cards, each showing a job and the place that job is done: a nurse '
            'at a hospital, a shop assistant at a shop, a teacher at a school, a bus '
            'driver on a bus, a cook in a kitchen and a student with books.'),

 2: lambda: F.label_me(
        [('dawn', 0.10, 0.46), ('midday', 0.30, 0.56), ('afternoon', 0.50, 0.46),
         ('evening', 0.70, 0.56), ('midnight', 0.90, 0.46)],
        height=620, draw=F.day_column,
        alt='A single day drawn as a column of five bands, light at the top and dark '
            'at the bottom, with a sun, a clock and a moon beside it. Five numbered '
            'lines run to the right for the learner to write dawn, midday, afternoon, '
            'evening and midnight.'),

 3: lambda: F.process_strip(
        [('Tomas finishes', 'nurse'), ('Amina opens', 'shop'), ('Maya catches the bus', 'bus'),
         ('Dani starts', 'school'), ('Mr Okonkwo watches', 'home')],
        height=460,
        alt='Five stages of one morning on Alder Street in order, each with an arrow '
            'to the next: Tomas finishes a night shift, Amina opens the shop, Maya '
            'catches the bus, Dani starts his class, Mr Okonkwo watches from his window.'),

 4: lambda: F.scene(
        [('Maya', 'person', 'bookshop'), ('Tomas', 'nurse', 'hospital'),
         ('Amina', 'shop', 'corner shop'), ('Dani', 'book', 'student'),
         ('Mr Okonkwo', 'home', 'teacher'), ('Yuki', 'cup', 'works at home')],
        height=560,
        alt='The six people of 14 Alder Street standing in a row at eight in the '
            'morning, each with the place they belong to: Maya and the bookshop, '
            'Tomas and the hospital, Amina and the corner shop, Dani the student, '
            'Mr Okonkwo the teacher, and Yuki who works at home.'),
}
