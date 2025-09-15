# Simple Skill Match Simulation
skills = {
    "Video Editing": ["editing", "film", "content"],
    "French Basics": ["language", "french", "speak"],
    "Excel": ["data", "spreadsheet", "office"]
}

def find_match(user_interest):
    for skill, tags in skills.items():
        if user_interest.lower() in tags:
            return f"Best match: {skill}"
    return "No match found."

print(find_match("french"))
print(find_match("data"))