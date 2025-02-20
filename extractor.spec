# -*- mode: python ; coding: utf-8 -*-


a = Analysis(
    ['extractor.py'],
    pathex=[],
    binaries=[],
    datas=[
        (r'C:\Users\darwi\miniconda3\envs\pdf_extractor\Lib\site-packages\tkinterdnd2\tkdnd', 'tkinterdnd2/tkdnd'),
    ],
    hiddenimports=['tkinterdnd2', '_cffi_backend'],
    hookspath=[],
    hooksconfig={},
    runtime_hooks=[],
    excludes=[],
    win_no_prefer_redirects=False,
    win_private_assemblies=False,
    noarchive=False,
)
pyz = PYZ(a.pure)

exe = EXE(
    pyz,
    a.scripts,
    [],
    exclude_binaries=True,
    name='extractor',
    debug=False,
    bootloader_ignore_signals=False,
    strip=False,
    upx=True,
    console=False,
    disable_windowed_traceback=False,
    argv_emulation=False,
    target_arch=None,
    codesign_identity=None,
    entitlements_file=None,
)
coll = COLLECT(
    exe,
    a.binaries,
    a.datas,
    strip=False,
    upx=True,
    upx_exclude=[],
    name='extractor',
)
