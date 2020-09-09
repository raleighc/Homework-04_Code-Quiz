# Homework-04_Code-Quiz
PSEUDO CODE for project

step 1 - create all pages needed link pages to each other and to bootstrap

step 2 - create content for the "begin" page of the quiz
    -navbar with link to high scores and timer that starts at 75 seconds.
    -Create 2 divs that will separate the quiz questions from the quiz buttons.
        -inside of div 1 create two elements that will contain the beginning title and the questions later presented
        -insdie of div 2 first list the instructions and the start button. This text will disapear after start and be populated by the questions.

step 3 - style the page with additional CSS how you would like for it to look. This is up to us this time.

step 4 - JAVASCRIPT begins. 
    -upon click div 1 will be replaced with the first question using DOM manipulation.
    -div 2 will also be replaced by the 4 buttons containing the potential answers.
    -at this time a set interval function will start the timer counting down from 75-0.
        -once the timer hits 0 we set if/else conditions to move to the "all done" page where they will learn their score and have an input to log their initials with their score.
        -also, every time you answer a question incorrectly, you lose 15 seconds off your timer (right now I have no idea how to do this)
            -maybe use a if/else condition to - 10 from timer if answer === false.?

step 5 - selecting the answers.
    -I will need to assign the buttons as correct or false.
    -I will need to know what button the user clicks and compare it to the correct answer.
    -from here I will create an array of objects that will contain the question, possible answers, correct and wrong answer assignments.
        -each time I the answer,  the question and options will immediately be replaced
        -and text will pop up under the buttons notifying correct or wrong selection (this lasts for roungly 3 seconds.)

step 6 - quiz over
    -question text will be populated with "ALL Done!"
    -your final score will populate the h3 element.
    -an input the enter your initials with a submit button will be there.
        -I believe we will be storing this information to local storage and recalling it to the high score list on the next screen.

step 7 - High Scores page.
    -main text will populate my h1 element.
    -a numbered list is then populated into the instructions element.
        -this list will be ordered based on highest number at the top and cascading (not sure how to do this)
    -two buttons will populate the element containing the start quiz button.
        -"Go Back" will redirect to the starting page.
        -"clear high scores" will...clear high scores.

step 8 - the end. Start over.


    

    
    
    
    
    
    
    
    
    
    
    
    
    
    # 04 Web APIs: Code Quiz

As you proceed in your career as a web developer, you will probably be asked to complete a coding assessment, which is typically a combination of multiple-choice questions and interactive challenges. Build a timed code quiz with multiple-choice questions. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code. It will also feature a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.

## User Story

```
AS A coding bootcamp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```

## Acceptance Criteria

```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score
```

The following animation demonstrates the application functionality:

![code quiz](./Assets/04-web-apis-homework-demo.gif)

### Review

You are required to submit the following for review:

* The URL of the functional, deployed application.

* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

- - -
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
