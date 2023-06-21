import os
import time
from datetime import datetime

list_of_files_to_ignore = ["node_modules", ".next", "public", ".git"]


def get_all_files_in_current_directory_recursively(
    directory: str, list_of_files_to_ignore: list = []
) -> list:
    all_files = []
    for root, dirs, files in os.walk(directory):
        dirs[:] = [d for d in dirs if d not in list_of_files_to_ignore]
        for file in files:
            file_path = os.path.join(root, file)
            all_files.append(file_path)
    return all_files


file_contents = {}
for file in get_all_files_in_current_directory_recursively(
    os.getcwd(), list_of_files_to_ignore
):
    with open(file, "r") as f:
        file_contents[file] = f.read()

while True:
    for file in get_all_files_in_current_directory_recursively(
        os.getcwd(), list_of_files_to_ignore
    ):
        with open(file, "r") as f:
            current_content = f.read()
            if file_contents.get(file) != current_content:
                file_contents[file] = current_content
                with open("public/sitemap.xml", "r") as sitemap:
                    sitemap_contents = sitemap.read()
                index_of_lastmod = sitemap_contents.find("<lastmod>")
                index_of_lastmod_end = sitemap_contents.find(
                    "</lastmod>", index_of_lastmod
                )
                if index_of_lastmod != -1 and index_of_lastmod_end != -1:
                    sitemap_contents = (
                        sitemap_contents[: index_of_lastmod + 9]
                        + datetime.now().strftime("%Y-%m-%d")
                        + sitemap_contents[index_of_lastmod_end:]
                    )
                    with open("public/sitemap.xml", "w") as sitemap:
                        sitemap.write(sitemap_contents)
    time.sleep(5)
