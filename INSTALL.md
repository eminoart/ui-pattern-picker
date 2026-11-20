# Installing ui-pattern-picker (instructions for AI agents)

If a user asks you to "install the ui-pattern-picker skill" (or "UI 패턴 피커 스킬 설치해줘"), follow the section for the tool you are running in. Tell the user in one line what you did, then suggest they try: `What UI is there?` / `UI 뭐가 있어`.

Skill source: https://github.com/eminoart/ui-pattern-picker (folder `skills/ui-pattern-picker/SKILL.md`, Agent Skills format).

## You can run shell commands (Codex, Cursor, Claude Code, Gemini CLI, other coding agents)
Run:

```sh
npx -y skills add eminoart/ui-pattern-picker -y
```

Add `-g` to install it for all projects instead of the current one. If `npx` is unavailable, copy the folder by hand into your agent's skills directory:

```sh
git clone --depth 1 https://github.com/eminoart/ui-pattern-picker /tmp/uip
# Codex:        ~/.codex/skills/      Claude Code: ~/.claude/skills/
# Cursor:       .cursor/skills/       Other agents: their skills folder
cp -r /tmp/uip/skills/ui-pattern-picker <skills-folder>/
```

Start a new session (or reload skills) so it is picked up.

## You cannot run commands (ChatGPT, Claude app, other chat apps)
You cannot install it yourself. Give the user these steps:

1. Download https://github.com/eminoart/ui-pattern-picker/raw/main/ui-pattern-picker-skill.zip
2. Upload it:
   - **ChatGPT:** Skills → Create → Upload from your computer
   - **Claude:** Customize → Skills → + → Create skill → Upload a skill
3. Start a new chat and ask `UI 뭐가 있어` / `What UI is there?`

Until it is installed, the catalog can be used right away at https://eminoart.github.io/ui-pattern-picker/ (add `?v=loading&lang=ko` to open a category).
