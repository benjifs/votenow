# Hack the Vote (not really though)

## Usage

Install the dependencies with

```
npm install
```

Modify the `apiKey` to match the appropriate show you'd like to vote for and `v` for the id of who you're voting for.

You might also need to modify the `version_id` and the `versionCheck` depending on how often they update those values.

Lastly, modify the number of votes that you want send in the last line and save the file.

To run:

```
npm start
```

## Disclaimer

The following is an extract from the voting rules of the show:

>By voting, you are agreeing not to use any unofficial, third party services to cast votes on your behalf. Administrators reserve the right, but are not obligated, to disqualify, block or remove any votes from any individual who votes by any electronic, mechanical or automated means, or otherwise tampers with the vote process, or for any other reason, as determined by Administrators in their sole discretion.

Other than testing with a very small number of fake emails, I did not use this to skew the votes in any way. I'm also not responsible if you use this in that way. This method of voting is against the rules and the likelihood of those votes even counting is small.
