import os
import argparse
from pathlib import Path

def scan_directory(start_path='.', output_file='folder_structure.txt', ignore_patterns=None):
    """
    Scans a directory and writes its structure to a text file.
    
    Args:
        start_path (str): The directory to start scanning from
        output_file (str): Name of the output file
        ignore_patterns (list): List of patterns to ignore (e.g., ['.git', '__pycache__'])
    """
    if ignore_patterns is None:
        ignore_patterns = ['.git', '__pycache__', 'node_modules', '.idea', '.vscode', 'venv']
    
    def should_ignore(path):
        return any(pattern in str(path) for pattern in ignore_patterns)
    
    # Use pathlib for better path handling
    start_path = Path(start_path).resolve()
    
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(f"Directory structure for: {start_path}\n")
        f.write("=" * 50 + "\n\n")
        
        for path in sorted(start_path.rglob('*')):
            # Skip ignored patterns
            if should_ignore(path):
                continue
                
            # Calculate relative path from start_path
            rel_path = path.relative_to(start_path)
            
            # Calculate the depth for indentation
            depth = len(rel_path.parts) - 1
            
            # Create the line with proper indentation
            indent = "    " * depth
            prefix = "📁 " if path.is_dir() else "📄 "
            line = f"{indent}{prefix}{path.name}"
            
            f.write(line + "\n")
    
    print(f"Directory structure has been saved to {output_file}")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Scan directory structure and save to file")
    parser.add_argument("--path", default=".", help="Path to scan (default: current directory)")
    parser.add_argument("--output", default="folder_structure.txt", help="Output file name")
    parser.add_argument("--ignore", nargs="+", help="Additional patterns to ignore")
    
    args = parser.parse_args()
    
    # Combine default ignore patterns with any additional ones provided
    ignore_patterns = ['.git', '__pycache__', 'node_modules', '.idea', '.vscode', 'venv']
    if args.ignore:
        ignore_patterns.extend(args.ignore)
    
    scan_directory(args.path, args.output, ignore_patterns)
