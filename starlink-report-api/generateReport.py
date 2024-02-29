import sys
import json

# Dummy data for demonstration
data = {
  "1234": {"id": "1234", "name": "Satellite A", "status": "Active"},
  "5678": {"id": "5678", "name": "Satellite B", "status": "Inactive"},
}

# Simulate processing and print JSON output
if __name__ == "__main__":
    id = sys.argv[1]
    result = data.get(id, {})
    print(json.dumps(result))
