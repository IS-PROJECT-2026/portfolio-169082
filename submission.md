

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
<img width="834" height="257" alt="image" src="https://github.com/user-attachments/assets/b29737ce-393c-4403-9366-d19f375fdfd7" />



* **Caption:** Three milestones (Structure & Layout, Core Content Sections, Interactivity & Deployment) each with linked, granular issues tracking distinct phases of the build.

### B. Project Board
<img width="655" height="446" alt="image" src="https://github.com/user-attachments/assets/afa50250-d9cd-452c-8589-5687a360d23a" />


* **Caption:** All 8 issues moved through To Do, In Progress, and Done as work was completed, reflecting real task progression rather than a static board.

### C. Branching Architecture
<img width="866" height="433" alt="image" src="https://github.com/user-attachments/assets/88649334-262f-4db8-a3b8-af58e926f9e0" />


* **Caption:** Feature branches follow conventional, issue-linked naming (feat/, style/, fix/, docs/, refactor/, chore/) tied to specific issue numbers.

### D. Pull Requests & Traceability
<img width="848" height="401" alt="image" src="https://github.com/user-attachments/assets/fc54e65d-3e3f-465e-a3da-fd0881d424ab" />

* **Caption:** PR uses a "Closes #2" reference in the description, automatically linking and closing the corresponding issue on merge.

---

## 5. Merge Conflict Evidence

### Conflict 1 — Full Chronology

**What cause did you use?** Same-line edit — two branches independently modified the same line of the hero role text.

#### Step 1: Generating the Clash
<img width="1876" height="893" alt="conflict1_step1_merge_attempt" src="https://github.com/user-attachments/assets/f2be09ab-bac2-4091-93b6-77c12fd28f14" />


* **Caption:** Branches `feat/9-conflict-a` and `feat/10-conflict-b` both edited the hero role wording on the same line; GitHub flagged "Can't automatically merge" on PR #17.

#### Step 2: Inside the Code Editor (Conflict Markers)
<img width="1789" height="726" alt="conflict1_step2_raw_markers" src="https://github.com/user-attachments/assets/879e8bfb-af82-46f8-888d-643661b7d033" />

* **Caption:** Raw markers showed two different rewordings of the same `<p class="hero-role">` line — one adding "Student," the other reordering the degree title.

#### Step 3: Resolution & Clean Merge
<img width="1771" height="862" alt="Conflict1_step3" src="https://github.com/user-attachments/assets/19d02965-298c-4fcf-a70b-54657266af23" />



* **Caption:** Resolved by keeping the clearer "Student" wording and removing the duplicate/conflicting line; PR #17 merged cleanly afterward.

### Conflict 2 — Different Cause

**What cause did you use?** File rename vs. same-file edit.

**Why does this cause trigger a conflict?** One branch renamed `style.css` to `styles.css` while another branch, unaware of the rename, edited content inside the original `style.css`. Git could not automatically determine how to apply the edit to the renamed file, since the rename and the edit were made independently.

<img width="1828" height="344" alt="conflict2_trigger_pr20 (1)" src="https://github.com/user-attachments/assets/f41eb093-5e34-4111-80a5-81ffb2bf7a49" />
<img width="1815" height="782" alt="conflict2_trigger_terminal" src="https://github.com/user-attachments/assets/9e986940-91c0-477f-8cdc-29764ae6c8e7" />
<img width="1837" height="665" alt="conflict2_raw_markers" src="https://github.com/user-attachments/assets/50f2243c-8c5d-4b8d-8a6e-1227030fb849" />
<img width="1701" height="509" alt="conflict2_resolution" src="https://github.com/user-attachments/assets/51900a4e-2aba-4f0f-b9ca-c51c2a5f51fd" />




* **Caption:** Branches `refactor/11-rename-styles` and `feat/12-edit-style` conflicted over both the file's name and a comment inside it, seen in PR #20.

### Conflict 3 — Different Cause

**What cause did you use?** Formatting/indentation divergence.

**Why does this cause trigger a conflict?** One branch reformatted the `.about-lead` CSS block from 2-space to 4-space indentation, while another branch added a new property (`letter-spacing`) to the same block using the original 2-space formatting. Git could not reconcile the differing indentation with the added line automatically.

<img width="921" height="407" alt="conflict_evidence_3" src="https://github.com/user-attachments/assets/5f06c8ad-5fab-4878-8c60-87aac47a0d3c" />


* **Caption:** Branches `style/13-conflict-c1` and `style/14-conflict-c2` conflicted over indentation style and an added CSS property in the same rule block, seen in PR #23.

---

## 6. Feedback & Evaluation

- [ ] **Anonymous Evaluation Form:** [Course & Instructor Evaluation](https://forms.gle/YLybnsyXXErKEg3s9)

---

## Final Submission

Submission Form: https://forms.gle/KrT4VxtFtkU3wtYu8
