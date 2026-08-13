# Project Submission Report

## 1. Student Details

- **Full Name:** Zakiya Noor
- **GitHub Username:** zakiyanoor
- **Email:** zakiyanoorsalan@gmail.com

---

## 2. Deployed Project Link

- **Live GitHub Pages URL:** https://is-project-2026.github.io/portfolio-169082/

---

## 3. Reflection — Grounded in Your Git History

### A. Your Best Commit

- **Commit URL:** https://github.com/IS-PROJECT-2026/portfolio-169082/commit/16c8fa7
- **Why this one?** It's a clean `fix` commit with a clear, specific subject line ("ensure page content is visible without JavaScript") that describes exactly what the change does and why, without needing to open the diff to understand the intent.

### B. A Mistake or Struggle

- **Link to the evidence:** https://github.com/IS-PROJECT-2026/portfolio-169082/pull/20
- **What happened and how did you recover?** While engineering a file-rename-vs-edit merge conflict, my local git kept auto-resolving the rename intelligently instead of producing real conflict markers. I had to `git reset --hard` back to the pre-merge commit twice and re-edit the same line on both branches until the content genuinely diverged enough to force a real conflict, which I then resolved manually.

### C. A Pull Request You're Proud Of

- **PR URL:** https://github.com/IS-PROJECT-2026/portfolio-169082/pull/17
- **What did you check before merging?** I reviewed the diff to confirm the conflict resolution kept the intended final wording, checked that the merge commit correctly combined both branches' history, and confirmed the PR description linked back to the original issue before merging.

### D. One Thing You Would Do Differently

- **What would you change?** I would name and organize my evidence screenshots more carefully from the start rather than saving them into a loosely-named folder, since a `git add -A` early on accidentally swept unrelated screenshot files into an unrelated commit.
- **Link to the evidence of the original decision:** https://github.com/IS-PROJECT-2026/portfolio-169082/commit/a6344b2

---

## 4. Screenshots of Key GitHub Features

*(Paste each screenshot directly on GitHub's web editor as instructed — see below for what to capture)*

### A. Milestones and Issues
Screenshot your Milestones page showing all 3 milestones with issue counts: https://github.com/IS-PROJECT-2026/portfolio-169082/milestones

* **Caption:** Three milestones (Structure & Layout, Core Content Sections, Interactivity & Deployment) each with linked, granular issues tracking distinct phases of the build.

### B. Project Board
Screenshot your Portfolio Build board: https://github.com/orgs/IS-PROJECT-2026/projects/154

* **Caption:** All 8 issues moved through To Do, In Progress, and Done as work was completed, reflecting real task progression rather than a static board.

### C. Branching Architecture
Screenshot your branch list: https://github.com/IS-PROJECT-2026/portfolio-169082/branches

* **Caption:** Feature branches follow conventional, issue-linked naming (feat/, style/, fix/, docs/, refactor/, chore/) tied to specific issue numbers.

### D. Pull Requests & Traceability
Screenshot PR #9: https://github.com/IS-PROJECT-2026/portfolio-169082/pull/9

* **Caption:** PR uses a "Closes #2" reference in the description, automatically linking and closing the corresponding issue on merge.

---

## 5. Merge Conflict Evidence

### Conflict 1 — Full Chronology

**What cause did you use?** Same-line edit — two branches independently modified the same line of the hero role text.

#### Step 1: Generating the Clash
See `/evidence/conflict_evidence_1.png` (or `Conflict_1step1.png`)

* **Caption:** Branches `feat/9-conflict-a` and `feat/10-conflict-b` both edited the hero role wording on the same line; GitHub flagged "Can't automatically merge" on PR #17.

#### Step 2: Inside the Code Editor (Conflict Markers)
See `/evidence/conflict_evidence_1.png`

* **Caption:** Raw markers showed two different rewordings of the same `<p class="hero-role">` line — one adding "Student," the other reordering the degree title.

#### Step 3: Resolution & Clean Merge
See `/evidence/Conflict1_step3.png`

* **Caption:** Resolved by keeping the clearer "Student" wording and removing the duplicate/conflicting line; PR #17 merged cleanly afterward.

### Conflict 2 — Different Cause

**What cause did you use?** File rename vs. same-file edit.

**Why does this cause trigger a conflict?** One branch renamed `style.css` to `styles.css` while another branch, unaware of the rename, edited content inside the original `style.css`. Git could not automatically determine how to apply the edit to the renamed file, since the rename and the edit were made independently.

See `/evidence/conflict_evidence_2.png`

* **Caption:** Branches `refactor/11-rename-styles` and `feat/12-edit-style` conflicted over both the file's name and a comment inside it, seen in PR #20.

### Conflict 3 — Different Cause

**What cause did you use?** Formatting/indentation divergence.

**Why does this cause trigger a conflict?** One branch reformatted the `.about-lead` CSS block from 2-space to 4-space indentation, while another branch added a new property (`letter-spacing`) to the same block using the original 2-space formatting. Git could not reconcile the differing indentation with the added line automatically.

See `/evidence/conflict_evidence_3.png`

* **Caption:** Branches `style/13-conflict-c1` and `style/14-conflict-c2` conflicted over indentation style and an added CSS property in the same rule block, seen in PR #23.

---

## 6. Feedback & Evaluation

- [ ] **Anonymous Evaluation Form:** [Course & Instructor Evaluation](https://forms.gle/YLybnsyXXErKEg3s9)

---

## Final Submission

Submission Form: https://forms.gle/KrT4VxtFtkU3wtYu8