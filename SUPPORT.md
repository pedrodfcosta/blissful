# App Requirements

### FUNCTIONAL REQUIREMENTS

1 - LOADING SCREEN

    * server.health === OK → 'List Screen'
    * server.health === NOK -> 'Retry Action'

2 - QUESTIONS LIST SCREEN

- The loading screen managed to contact and check the server health

- The app was opened with an URL with the format

    * For iOS, Android and Windows Apps:
        blissrecruitment://questions?question_filter=FILTER

    * For Web Apps:
        http://HOST:PORT/questions?question_filter=FILTER

- Notice that this format contains a query parameter which should be used to fill the search box and trigger the search functionality. If the question_filter parameter is missing the user should simply be placed at the listing.

- If the question_filter parameter is present but has an empty value the the user should be placed at the filter variant with no input inserted but with the input box focused.

- Fetch list data from endpoint

    * fetch 10 records at a time

    * no sorting functionality. The list will follow the order returned from the API

    * should start loading 10 additional records if the user shows intent to browse additional records

    * should present a search box at the top of the list that allows the user to filter the results:

        - Results should be shown in the same screen as a list
        - Searching implies hitting the appropriate endpoint and this variation must comply with the 2 requirements defined above
        - If a search result is being shown (empty or not) the user must be allowed to share this with other users via the 'Share Screen'
        - The app must send and appropriate URL that, when opened, drives the user to the appropriate screen

    * The app must present a dismiss button to get out of the Search variant

- Each list element is selectable and whenever the user selects one record the app must show the 'Detail Screen'

3 - DETAIL SCREEN

- The front-end application must show the detail screen in two cases
    * A row was selected in 'List Screen'
    * The application was opened with the detail screen URL from outside the app: [
        "For iOS, Android and Windows Apps:
            blissrecruitment://questions?question_id=QUESTION_ID
        "For Web Apps:"
            http://HOST:PORT/questions?question_id=QUESTION_ID

- The 'Detail Screen' must:
    * allow the user to navigate back to the listing
    * convey all the information of the object using appropriate visualization widgets
    * allow the user to share this content with other users via the 'Share Screen'. The app must send and appropriate URL that, when opened, drives the user to the appropriate screen
    * allow the user to vote on a particular answer via the use of a button. This should trigger an appropriate call to the API endpoint devoted to update Questions

4 - SHARE SCREEN

- This screen must allow the users to share this content with others via email

- The sharing mechanism should invoke the appropriate service on the back-end

5 - NO CONNECTIVITY SCREEN

- The app must monitor connectivity with the Internet and show an appropriate screen whenever the connection is lost

- This screen should remain visible as long as the device has no connection to the Internet

- When connection is regained then the user should be at the state where it was before

-----------------------------
### NON-FUNCTIONAL REQUIREMENTS

1 - PLATFORM TARGETS
    * Front-end: Javascript/CSS/HTML - vuejs or angularjs - ES5 - Chrome latest version - grunt/npm

2 - BRANCHING STRATEGIES AND CONFIGURATION MANAGEMENT
    * The source code must be branched and tagged according to the gitflow process.

3 - SOURCE CODE LANGUAGE
    * All the source code submitted, included comments, documentation, filenames, project artifact and target names must be written in English

4 - SOFTWARE DELIVERIES
    * The software will be delivered via the GitHub platform as a public git repo.
    * A README file must be present at the root of the repo indicating how to setup, compile and run the software.
    * You must send an email, written in English, to: tjanela@blissapplications.com and asoares@blissapplications.com
    * Indicating the release tag containing the delivery and the subject:
        [CANDIDATE_POSITION RECRUITMENT DELIVERY] {TAG}
    * In case you are a backend developer and created the tag “v0.1” this would become:
        [BACKEND RECRUITMENT DELIVERY] v0.1

-------------------
### API SPECIFICATION

- Please use the specification available at apiary.io to implement either the back-end or the front-end.

- The base URL for a mock API is:
    https://private-bbbe9-blissrecruitmentapi.apiary-mock.com

- Note for Mobile, Desktop and Front-end software engineers:

    * This base URL points to apiary’s mock implementation of the API described. This will generate responses for the multiple endpoints but, other than that, it has no real implementation behind. As such, certain endpoints will appear to not be working. That is intended. Implement the API client against the spec using one of the technologies listed on NREQ-01: Platform Targets. That is, partly, what we will evaluate in your case.  Choose a technology that applies to the job position you are applying to.
