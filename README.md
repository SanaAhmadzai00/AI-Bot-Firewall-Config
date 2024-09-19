BotShield Configurator is a Node.js-based script that automates the creation of firewall rules to detect and log traffic from AI bots. The project allows for dynamic customization of firewall rules and generates a URL that can be used to configure firewall settings.

Features
Bot Detection: Detects AI bots based on their user agent strings (e.g., ChatGPT, Claude, GPTBot, GoogleBot).
Dynamic Rule Customization: Update parameters such as rate limiting and action duration dynamically.
Error Handling: Handles file loading errors and logs relevant information for debugging.
Automated URL Generation: Creates a URL embedding the bot detection rule for easy firewall configuration.
Flexible Setup: Customize the team and project URL components to fit your environment.
Project Structure
index.js: The main script that loads the rule, updates parameters, and generates the URL for firewall configuration.
rule.json: The rule definition file specifying conditions to detect known AI bots and the actions to be taken.
