HEAD
# Flowbit Memory Agent – Learned Memory Layer

---

## 1️⃣ Project Goal (Motto)

**“Make invoice automation smarter over time by learning from past human corrections instead of repeating the same mistakes.”**

### Explanation  
The goal of this project is to build a **memory-driven AI agent** that improves invoice processing accuracy by **remembering vendor-specific patterns and repeated human corrections**.  
Instead of treating every invoice as a new case, the system reuses learned knowledge to reduce repetitive human intervention while keeping all decisions **explainable and auditable**.

---

## 2️⃣ Architecture (Recall → Apply → Decide → Learn)

The system follows a clear, deterministic AI-agent workflow:

### 🔁 Recall  
- Retrieve relevant memories (vendor, correction, resolution) from persistent storage.
- Memories are selected based on invoice context such as vendor name and raw text patterns.

### 🛠 Apply  
- Apply recalled memory to normalize invoice fields.
- Suggest corrections such as:
  - Filling missing service dates
  - Handling VAT-included pricing
  - Recovering missing currency
  - Mapping freight descriptions to standard SKUs

### ⚖️ Decide  
- Decide whether to:
  - Auto-accept
  - Auto-correct
  - Escalate for human review
- Decisions depend on confidence scores and memory reliability.

### 📚 Learn  
- Store new insights from human corrections.
- Reinforce successful memories.
- Prevent incorrect learnings from dominating future decisions.
- Maintain a complete audit trail.

---

## 3️⃣ Memory Types Implemented

### 1. Vendor Memory  
Stores vendor-specific patterns and behaviors.

**Examples:**
- Supplier GmbH → “Leistungsdatum” = `serviceDate`  
- Parts AG → Prices include VAT  
- Freight & Co → “Seefracht / Shipping” → SKU `FREIGHT`

---

### 2. Correction Memory  
Learns from repeated human corrections.

**Examples:**
- Quantity mismatch → adjust to delivery note quantity  
- VAT already included → recompute tax  
- Missing currency → recover from raw text  

---

### 3. Resolution Memory  
Tracks how discrepancies were resolved:
- Human approved
- Human rejected

This prevents bad learnings from dominating future decisions.

---

## 4️⃣ How to Run the Project

### Prerequisites
- Node.js (LTS)
- npm

### Install Dependencies
```bash
npm install
=======
# Flowbit-memory-agent
#Memory-driven invoice automation system that learns from human corrections and vendor behavior to improve decisions over time using persistent storage and transparent rule-based logic.
>>>>>>> 4b344b8c00b66391eafcfd5940442dab6122f68d
