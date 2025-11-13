import React, { useEffect, useState } from "react";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");
  const [filter, setFilter] = useState("all");
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem("tasks_v1");
      if (raw) setTasks(JSON.parse(raw));
      else
        setTasks([
          { id: 1, title: "Example task: click to toggle complete", completed: false },
          { id: 2, title: "Try adding a task below", completed: true },
        ]);
    } catch {
      setTasks([]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks_v1", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (e) => {
    e?.preventDefault();
    const title = text.trim();
    if (!title) return;
    setTasks((prev) => [
      ...prev,
      { id: Date.now() + Math.floor(Math.random() * 1000), title, completed: false },
    ]);
    setText("");
  };

  const removeTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  const startEdit = (task) => {
    setEditingId(task.id);
    setEditingText(task.title);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditingText("");
  };

  const saveEdit = (id) => {
    const trimmed = editingText.trim();
    if (!trimmed) return;
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, title: trimmed } : t)));
    cancelEdit();
  };

  const clearCompleted = () => {
    setTasks((prev) => prev.filter((t) => !t.completed));
  };

  const filtered = tasks.filter((t) => {
    if (filter === "active") return !t.completed;
    if (filter === "completed") return t.completed;
    return true;
  });

  

  return (
    <div className="container tasks-container">
      <h2>Tasks</h2>

        <form onSubmit={addTask} className="tasks-form">
          <input
            className="tasks-input"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Add a new task and press Enter"
          />
          <button type="submit" className="btn">
            Add
          </button>
        </form>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div className="task-filters">
          <button
            onClick={() => setFilter("all")}
            className="small-btn"
            style={{ fontWeight: filter === "all" ? "700" : "400" }}
          >
            All
          </button>
          <button
            onClick={() => setFilter("active")}
            className="small-btn"
            style={{ fontWeight: filter === "active" ? "700" : "400" }}
          >
            Active
          </button>
          <button
            onClick={() => setFilter("completed")}
            className="small-btn"
            style={{ fontWeight: filter === "completed" ? "700" : "400" }}
          >
            Completed
          </button>
        </div>

        <div style={{ fontSize: 14, color: "var(--muted)" }}>
          {tasks.length} total • {tasks.filter((t) => !t.completed).length} active
        </div>
      </div>

      <ul className="tasks-list">
        {filtered.map((task) => (
          <li key={task.id} className="task-item">
            <input type="checkbox" checked={task.completed} onChange={() => toggleComplete(task.id)} />
            {editingId === task.id ? (
              <>
                <input
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                  className="tasks-input"
                  style={{ padding: "6px 8px", fontSize: 14 }}
                />
                <button onClick={() => saveEdit(task.id)} className="small-btn">
                  Save
                </button>
                <button onClick={cancelEdit} className="small-btn">
                  Cancel
                </button>
              </>
            ) : (
              <>
                <div className={`task-title ${task.completed ? 'completed' : ''}`} onDoubleClick={() => startEdit(task)}>
                  {task.title}
                </div>
                <button onClick={() => startEdit(task)} className="small-btn">
                  Edit
                </button>
                <button onClick={() => removeTask(task.id)} className="small-btn">
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>

      <div className="tasks-footer">
        <div>
          <button onClick={() => setTasks([])} className="small-btn">
            Clear all
          </button>{" "}
          <button onClick={clearCompleted} className="small-btn">
            Clear completed
          </button>
        </div>
        <div style={{ fontSize: 13, color: "var(--muted)" }}>Tip: double-click a task to edit</div>
      </div>
    </div>
  );
}


