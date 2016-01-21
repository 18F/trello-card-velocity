# trello-card-velocity (a Work In Progress)

The goal of this project is to take a trello board, and calculate the velocity of movement of cards from from one list to another list.

## Usage

First, you'll need to generate a `config.json` file. To do so, follow the following steps:

1. `mv config.json.example config.json`
2. Get your [developer key](https://trello.com/1/appKey/generate) from Trello.
3. Go to the following URL in your browser  `https://trello.com/1/connect?key=<DEVELOPER_KEY>&name=trello-card-velocity&response_type=token&expiration=never` and copy the TOKEN.
4. Replace the contents of `config.json` with the DEVELOPER_KEY and TOKEN

Once your `config.json` is ready, you're ready to use the script.

## Public domain

This project is in the worldwide [public domain](LICENSE.md). As stated in [CONTRIBUTING](CONTRIBUTING.md):

> This project is in the public domain within the United States, and copyright and related rights in the work worldwide are waived through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).
>
> All contributions to this project will be released under the CC0 dedication. By submitting a pull request, you are agreeing to comply with this waiver of copyright interest.
