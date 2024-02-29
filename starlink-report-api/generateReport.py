import sys
import json

# Dummy data for demonstration
launches = [
    {
        "id": "0001",
        "sats": [
            {"id": "sat-110", "name": "Satellite A", "status": "Active"},
            {"id": "sat-111", "name": "Satellite B", "status": "Inactive"},
            {"id": "sat-112", "name": "Satellite C", "status": "Active"},
            {"id": "sat-113", "name": "Satellite D", "status": "Active"},
        ]
    },
    {
        "id": "0002",
        "sats": [
            {"id": "sat-120", "name": "Satellite E", "status": "Active"},
            {"id": "sat-121", "name": "Satellite F", "status": "Inactive"},
            {"id": "sat-122", "name": "Satellite G", "status": "Active"},
        ]
    },
    {
        "id": "0003",
        "sats": [
            {"id": "sat-130", "name": "Satellite H", "status": "Inactive"},
            {"id": "sat-131", "name": "Satellite I", "status": "Inactive"},
        ]
    },
    {
        "id": "0004",
        "sats": [
            {"id": "sat-140", "name": "Satellite J", "status": "Active"},
            {"id": "sat-141", "name": "Satellite K", "status": "Inactive"},
            {"id": "sat-142", "name": "Satellite L", "status": "Active"},
            {"id": "sat-143", "name": "Satellite M", "status": "Active"},
        ]
    },
    {
        "id": "0005",
        "sats": [
            {"id": "sat-150", "name": "Satellite N", "status": "Active"},
        ]
    },

]

# Function to find satellites by launch ID
def find_sats_by_launch_id(launch_id):
    for launch in launches:
        if launch["id"] == launch_id:
            return launch["sats"]
    return []

if __name__ == "__main__":
    # Expecting the launch ID as the first argument
    launch_id = sys.argv[1]
    satellites = find_sats_by_launch_id(launch_id)
    
    # Output the satellites as JSON
    print(json.dumps(satellites))