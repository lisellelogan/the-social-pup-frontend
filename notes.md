for MVP 5 stateless components:
- filter users

for show page (profile):
- add button to like and dislike
    - like will add to friends list
    - when a user likes friend, will add to list and update global state
        - so i need an event handler and to connect to the store
- add delete option
    - when a user deletes a friend, will remove from list and remove from global state
        - so i need to use an event handler and connect to the store


create messages container (DO THIS LAST):
- form that will email user (does not actually need to submit to anything just for show)

to do:
[] remove added friend from user list
[] delete friendship
[] when friend is added no refresh if needed
    - should go to profile and see friend added to list
[] messenger = just link to email form

